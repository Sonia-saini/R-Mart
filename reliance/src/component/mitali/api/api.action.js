import { API_GET_ERROR, 
    API_GET_LOADING, 
    API_GET_SUCCESS,
    Update_Data
   // API_UPDATE_SUCCESS,
   // API_UPDATE_LOADING,
   // API_UPDATE_ERROR, 
   // API_DELETE, 
    //API_ADD 
} from "./api.type";
import axios from 'axios';
import { useDeprecatedAnimatedState } from "framer-motion";

export const getPosts=()=> async(dispatch)=>{
    dispatch({type:API_GET_LOADING});

    try{
        let res= await axios.get(' https://shines-node-deploy.onrender.com/products');
        dispatch({type:API_GET_SUCCESS, payload : res.data})
    }catch(e){
        dispatch({type : API_GET_ERROR, payload: e.message})
    }
}

export const updatePosts=(datas)=> (dispatch)=>{
    console.log(datas)
   dispatch({type:Update_Data, payload : datas})
}
// export const updatePosts=(id,cred)=> async(dispatch)=>{
//       await axios.patch(`http://localhost:8000/iron/${id}`,{
//         completed:!cred
//       })
//       dispatch({type:API_UPDATE_SUCCESS , payload: {id,cred}})
//       //console.log(cred? "yes" : "no")
// }

// export const addPosts=(posts)=> async(dispatch)=>{
//     let res=axios.post(`http://localhost:8000/iron/`,posts)
//     console.log(posts)
//     dispatch({type:API_ADD, payload : res.data})
// }

// export const deletePosts=(id)=> async(dispatch)=>{
//   let res= await axios.delete(`http://localhost:8000/iron/${id}`)
//     dispatch({type:API_DELETE, payload: id})
// }