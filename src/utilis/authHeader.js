// authHeader.js

const getAuthHeader = () => {
    // Retrieve the token from wherever it is stored (e.g., localStorage)
    // const user = JSON.parse(localStorage.getItem("user"))
    let user=JSON.parse(localStorage.getItem('user'))
    const token = user?.accessToken
    // console.log(user, "email");
    
    if (user) {
        return { Authorization: `Bearer ${token}` };
    }
  
    return {};
  };
  
  export default getAuthHeader;
  