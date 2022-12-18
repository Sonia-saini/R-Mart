import React from "react";

export const AppContest=React.createContext()

function AppContextProvider({children}) {
    const [state,setState]=React.useState({
        isAuth:false,
        token:null
    })
   


    
// loginUser
const loginUser=(token)=>{
   setState({
    ...state,
    isAuth:true,
    token
   })
}

// 
// logoutUser
const logoutUser=()=>{
    setState({
        ...state,
        isAuth:false,
        token:null
    })
}

    return (
        <>
<AppContest.Provider value={{authState:state,loginUser,logoutUser}}>
    {children}
</AppContest.Provider>
        </>
    )
}

export default AppContextProvider;