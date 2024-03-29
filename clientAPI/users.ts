import * as firebase from "firebase";

// needs to be of form "+181813014953".
// we do our best to clean it up.
const cleanUpPhoneNumber = (phoneNumber) => {
  phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
  if (phoneNumber.length != 12) {
    // likely just missing the +
    if (phoneNumber.length == 11) {
      phoneNumber = "+" + phoneNumber;
      return phoneNumber;
    }

    if (phoneNumber.length == 10) {
      phoneNumber = "+1" + phoneNumber;
      return phoneNumber;
    }
    throw new Error("Invalid phone number. Double check you entered it right.");
  }
};

const signUp = async (phoneNumber, recaptchaVerifier) => {
  try {
    phoneNumber = cleanUpPhoneNumber(phoneNumber);

    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      recaptchaVerifier.current
    );

    if (verificationId) {
      //store.dispatch({ type: 'UPDATE_FIREBASE_VERIFICATIONID', firebaseVerificationID: verificationId })
      return { success: true, data: "Verification code Sent." };
    }
  } catch (e) {
    return { success: false, data: e.toString() };
  }
};

const authenticateUser = async () => {
  let isLoggedIn = undefined;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }
  });

  function until(condition) {
    return new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (condition()) {
          clearInterval(interval);
          resolve();
        }
      });
    });
  }

  await until(() => isLoggedIn !== undefined);

  if (!isLoggedIn) {
    throw new Error("Not logged in.");
  }

  firebase.auth().currentUser.getIdToken();
};

const updateHandle = async (handle) => {
  return {
    success: true,
    data: "TODO: UPDATE HANDLE",
  };
};

const signOut = async () => {
  try {
    let r = await firebase.auth().signOut();
    //store.dispatch({ type: 'CLEAR_USERDATA'})
    return {
      success: true,
      data: r,
    };
  } catch (error) {
    console.log("error signing out: ", error);
    return {
      success: false,
      data: error,
    };
  }
};

const verifyOTP = async (verificationCode) => {
  try {
    //let firebaseVerificationID = store.getState().profileReducer.firebaseVerificationID;
    // const credential = firebase.auth.PhoneAuthProvider.credential(
    //     firebaseVerificationID,
    //     verificationCode
    // );
    // firebase.auth().setPersistence('local')
    // const authResult = await firebase.auth().signInWithCredential(credential);
    // store.dispatch({ type: 'UPDATE_FIREBASE_AUTHRESULT', firebaseAuthResult: authResult })
    // return {
    //     success: true,
    //     data: authResult
    // }
  } catch (err) {
    return {
      success: false,
      data: err,
    };
  }
};

const _test = async () => {
  console.log("succes");
  return "test successful";
};

class UserAPI {}

export { signUp, authenticateUser, updateHandle, signOut, verifyOTP, _test };
