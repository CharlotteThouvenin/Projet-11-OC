import { useParams } from "react-router-dom"



function User () {
    const {userId} = useParams()
    return(
       <div>User</div> 
    )
}

export default User