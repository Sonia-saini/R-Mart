import { API_GET_ERROR, 
    API_GET_LOADING,
     API_GET_SUCCESS, Update_Data} from "./api.type";

let initialState={
    loading:false,
    error:false,
    posts:[],
    datas: [],
}   

export const postReducer =(state=initialState, {type, payload})=>{
   switch (type) {
     default : {
        return state;
     }
    case API_GET_LOADING :{
        return {
            ...state,
            loading: true,
        }
    }
    case API_GET_ERROR :{
        return {
            ...state,
            loading:true,
            error:true,
        }
    }
    case API_GET_SUCCESS:{
        return {
            ...state,
            loading:false,
            error:false,
            posts:payload
        }
    }
    case Update_Data : {
        console.log(payload)
        return {
            ...state,
            loading:false,
            error:false,
            posts:payload,
            datas:payload
        }
        
    }

    //case API_DELETE:{
    //     let deleted= state.posts.filter((d)=> d.id !== payload.id)
    //     return{
    //         ...state,
    //         posts:deleted
    //     }
    // }

    // case API_UPDATE_SUCCESS :{
    //     let updated= state.posts.map((d)=>{
    //         if(d.id===payload.id){
    //             return {
    //                 ...d,
    //                 completed : !payload.cred
    //             }
    //         }
    //         return d
    //     });
    //     return {
    //         ...state,
    //         posts:updated
    //     }
    // }
   }
}