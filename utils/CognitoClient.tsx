import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { promisify } from 'util';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CognitoClient {
  constructor() {
    let userPoolParams;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      const testURL = "10.0.0.247"; 

      userPoolParams = {
        UserPoolId: 'local_08k2xaAy',
        ClientId: 'd0fw03t1cu3pq3726kyyg4mn5',
        endpoint: `http://${testURL}:9229`,
      };
    } else {
      userPoolParams = {
        UserPoolId: 'us-east-1_BZrR4rdM5',
        ClientId: '68aj8nbksgd001o2bd00gds65r',
        endpoint: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_BZrR4rdM5',
      };
    }
    const userPool = new CognitoUserPool(userPoolParams);

    this.userPool = userPool;
    console.log('userpool', this.userPool);
    this.poolSignUp = promisify(userPool.signUp).bind(userPool);
    // this.poolResendConfirmationCode = promisify(userPool.resendConfirmationCode).bind(userPool);
    // this.poolAuthenticateUser = promisify(userPool.authenticateUser).bind(userPool);
  }

  userPool;
  poolUser;
  poolSignUp;
  poolConfirmRegistration;
  poolResendConfirmationCode;
  poolAuthenticateUser;
  poolChangePassword;
  poolUpdateUserAttributes;
  poolGetCurrentUser;
  poolSignOut;
  poolRefreshSession;

  async signUp(username, password, attributes) {
    console.log("cognito")
    let attributeList = [];

    for (const attribute of attributes) {
      attributeList.push(new CognitoUserAttribute(attribute));
    }
    const a = await this.poolSignUp(username, password, attributeList, null);


    console.log("cognito 2", a);
    return a;

    //return this.poolSignUp(username, password, attributeList, null);
  }

  async confirmRegistration(username, code) {
    if (!this.poolUser) {
      const user = new CognitoUser({
        Username: username,
        Pool: this.userPool,
      });

      this.poolUser = user;
    }

    if (!this.poolConfirmRegistration) {
      this.poolConfirmRegistration = promisify(this.poolUser.confirmRegistration).bind(this.poolUser);
    }

    return this.poolConfirmRegistration(code, true);
  }

  async authenticateUser(username, password) {
    if (!this.poolUser) {
      const user = new CognitoUser({
        Username: username,
        Pool: this.userPool,
        Storage: this.userPool.storage,
      });

      this.poolUser = user;
    }

    if (__DEV__) {
      this.poolUser.setAuthenticationFlowType('USER_PASSWORD_AUTH');
    }

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    if (!this.poolAuthenticateUser) {
      this.poolAuthenticateUser = promisify(this.poolUser.authenticateUser).bind(this.poolUser);
    }

    const authenticate = async (resolve, reject) =>
      {
        const result = await this.poolAuthenticateUser(authDetails, {
          onSuccess: resolve,
          onFailure: reject,
        });
        console.log("authenticate done")
        console.log("poolAuththenticateUser reuslt:", result);
        this.poolUser.cacheTokens();
        console.log("after cacheToke");
        return result;
      }

    return new Promise(function (resolve, reject) {
      console.log("promise");
      authenticate(resolve, reject);
    });
  }

  async changePassword(oldPassword, newPassword) {
    if (!this.poolUser) {
      return;
    }
    if (!this.poolChangePassword) {
      this.poolChangePassword = promisify(this.poolUser.changePassword.bind(this.poolUser));
    }

    return this.poolChangePassword(oldPassword, newPassword);
  }

  async updateUserAttributes(attributes) {
    console.log(this.poolUser);
    if (!this.poolUpdateUserAttributes) {
      this.poolUpdateUserAttributes = promisify(this.poolUser.updateAttributes.bind(this.poolUser));
    }

    let attributeList = [];

    for (const attribute of attributes) {
      attributeList.push(new CognitoUserAttribute(attribute));
    }

    return this.poolUpdateUserAttributes(attributeList);
  }

  async getCurrentUser() {
    const syncStorage = promisify(this.userPool.storage.sync.bind(this.userPool));
    const syncRes = await syncStorage();

    if (syncRes !== 'SUCCESS') return;

    const currentUser = this.userPool.getCurrentUser();

    if (!currentUser) return;

    console.log('SGOSI', currentUser);
    this.poolUser = new CognitoUser({
      Username: currentUser.username,
      Pool: this.userPool,
    });

    const getSession = promisify(this.poolUser.getSession.bind(this.poolUser));

    const session = await getSession();

    console.log("noob")

    return this.poolUser;
  }

  async getCurrentUserAttributes() {
    console.log('🤬', this.userPool.storage.sync);
    const syncStorage = promisify(this.userPool.storage.sync.bind(this.userPool));
    const syncRes = await syncStorage();

    if (syncRes !== 'SUCCESS') return;

    const currentUser = this.userPool.getCurrentUser();

    this.poolUser = new CognitoUser({
      Username: currentUser.username,
      Pool: this.userPool,
    });

    const getSession = promisify(this.poolUser.getSession.bind(this.poolUser));
    const session = await getSession();

    const getUserAttributes = promisify(this.poolUser.getUserAttributes.bind(this.poolUser));
    const attributes = await getUserAttributes();
    console.log(attributes);
    return attributes;
  }

  async resendConfirmationCode(username) {
    this.poolUser = new CognitoUser({
      Username: username,
      Pool: this.userPool,
    });

    if (!this.poolResendConfirmationCode) {
      this.poolResendConfirmationCode = promisify(this.poolUser.resendConfirmationCode.bind(this.poolUser));
    }

    return this.poolResendConfirmationCode();
  }

  async signOut() {
    await this.getCurrentUser();

    this.poolUser.signOut();
  }

  async setTokens() {
    const currentUser = await this.getCurrentUser();

    if (!currentUser) return;

    await AsyncStorage.setItem('idToken', currentUser.signInUserSession.idToken.jwtToken);
    await AsyncStorage.setItem('accessToken', currentUser.signInUserSession.accessToken.jwtToken);
    await AsyncStorage.setItem('refreshToken', currentUser.signInUserSession.refreshToken.token);

    return {
      idToken: currentUser.signInUserSession.idToken.jwtToken,
      accessToken: currentUser.signInUserSession.accessToken.jwtToken,
      refreshToken: currentUser.signInUserSession.refreshToken.token,
    };
  }

  async refreshTokens() {
    console.log('refresh')
    const currentUser = await this.getCurrentUser();
    console.log("refresh mate", currentUser);
    if (!currentUser) return;

    console.log("refresh2")

    const refreshToken = currentUser.signInUserSession.refreshToken;

    if (!this.poolRefreshSession) {
      this.poolRefreshSession = promisify(this.poolUser.refreshSession.bind(this.poolUser));
    }

    return this.poolRefreshSession(refreshToken);
  }
}

export default CognitoClient;
