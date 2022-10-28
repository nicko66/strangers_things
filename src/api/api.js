




const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT"


export const fetchPosts = async () => {

    const response = await fetch(`${BASEURL}/posts`);
    console.log("-----THIS IS A RESPONSE-----");
    const result  = await response.json();
    console.log("THIS IS DATA", result.data.posts)
    return result.data.posts;
  }
 
