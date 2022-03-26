import axios from "axios";



export async function getUsers(page) {
 
    try {
        const result = await axios.get(process.env.REACT_APP_BACKEND_URL + `/user?page=${page}&limit=10`, {
          headers: {
            
            'app-id': '623e866f4abd54237e4f69af' 
          }
        })
      if(result.status == 200) {
         
        return result.data
      }
      else {
        console.log("Error",result.data.responseMessage)
        const empty = []
        return empty
      }
     }
     catch(e){
       console.log(e); 
       const empty = []
      return empty}
      
}

export async function getUser(id) {
 
    try {
        const result = await axios.get(process.env.REACT_APP_BACKEND_URL + '/user/' + id, {
          headers: {
            
            'app-id': '623e866f4abd54237e4f69af' 
          }
        })
      if(result.status == 200) {
      
        return result.data
      }
      else {
        console.log("Error",result.data.responseMessage)
        const empty = []
        return empty
      }
     }
     catch(e){
       console.log(e); 
       const empty = []
      return empty}
      
}