import { useSelector } from "react-redux"
import './style.scss'
import { AccountWrapper } from "../../Components/Account";
import { Navigate, useNavigate } from 'react-router-dom';
import Button from "../../Utils/button";


function User() {
    const userInfo = useSelector(state => state.userInfo);
    const navigate = useNavigate()

    const handleEditButton = () => {
        navigate('/editUser')
    }

    const token = sessionStorage.getItem('token');

    if (token) {
        return (
            <div className="main bg-dark user">
                <div className="user-header">
                    <h1>Welcome back <br />
                        {userInfo.firstName} {userInfo.lastName}!
                    </h1>
                    <Button onClick={handleEditButton} content="Edit Name" />
                </div>
                <AccountWrapper />
            </div>
        )
    }
    
    // redirige vers la page login si pas connecté
    else {
        return <Navigate to="/Login" />;
    }
}

export default User