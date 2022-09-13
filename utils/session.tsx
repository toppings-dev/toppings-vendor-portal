import AsyncStorage from '@react-native-async-storage/async-storage';

async function getCurrentUser() {
  if (await AsyncStorage.getItem("user") === null) {
    return null;
  }
  const user = await AsyncStorage.getItem("user");
  return JSON.parse(user);
}

function setCurrentUser(data) {
  console.log(data);
  AsyncStorage.setItem("user", JSON.stringify(data));
}

function setUnverifiedUser(data) {
  console.log(data);
  AsyncStorage.setItem("unverifiedUser", JSON.stringify(data));
}

async function getUnverifiedUser() {
  if (await AsyncStorage.getItem("unverifiedUser") === null) {
    return null;
  }
  return JSON.parse(await AsyncStorage.getItem("unverifiedUser"));
}

function setTokens(data) {
  console.log("set tokens", data);
  AsyncStorage.setItem('idToken', data.idToken.jwtToken);
  AsyncStorage.setItem('accessToken', data.accessToken.jwtToken);
  AsyncStorage.setItem('refreshToken', data.refreshToken.token);
}

async function getIdToken() {
  return await AsyncStorage.getItem("idToken");
}

async function getAccessToken() {
  return await AsyncStorage.getItem("accessToken");
}

async function getCurrentPage() { 
  if (await AsyncStorage.getItem("page") === null) {
    return null;
  }
  return await AsyncStorage.getItem("page");
}

function setCurrentPage(data) {
  AsyncStorage.setItem("page", data);
}

function clearSession(field) {
  AsyncStorage.removeItem(field);
}

export { getCurrentUser, setCurrentUser, getCurrentPage, setUnverifiedUser, getUnverifiedUser, setTokens, getIdToken, getAccessToken, setCurrentPage, clearSession };