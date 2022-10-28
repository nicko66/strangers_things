




const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT"


export const fetchPosts = async () => {

    const response = await fetch(`${BASEURL}/posts`);
    console.log("-----THIS IS A RESPONSE-----");
    const result  = await response.json();
    console.log("THIS IS DATA", result.data.posts)
    return result.data.posts;
  }


export const registerUser = async(username, password) => {
     try{
    const response = await fetch(`${BASEURL}/users/register`, {
        method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username,
      password,
     },
   }),
 });
    console.log("RESPONSE------>", response)
    const result = await response.json();
    return result;
} catch (error) {
    console.error("There was an error registering the user", error)
}
};
 
