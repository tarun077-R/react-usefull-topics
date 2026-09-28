import UserContext from "./UserContext"

const UserProvider = ({children})=>{

    const user={
   name:"lalit",
   email:"tarun@121"
    }

    return(

        <UserContext.Provider value={user}>
        {children}
        </UserContext.Provider>
    )
}
export default UserProvider;