export async function setUserToken(token:string) {
    console.log("tokentokentoken", token);
    await window.localStorage.setItem("userToken", token);
  }
  
  export async function getUserToken() {
    const userToken = await window.localStorage.getItem("userToken");
    return userToken;
  }