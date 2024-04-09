import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetStore } from '../../actions';
import logo from '../../Assets/images/argentBankLogo.webp';
import './style.scss';

function Header() {

    const token = useSelector(state => state.token)
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(resetStore());
        sessionStorage.removeItem('token')
    };

    // Fonction pour vérifier si un token est présent
    const isTokenAvailable = () => {
        return token !== null && token !== undefined;
    };

    if (isTokenAvailable()) {
        return (
            <div className="main-nav">
                <Link to="/">
                    <img src={logo} alt="logo" className="main-nav-logo" />
                </Link>
                <div>
                    <Link to="/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {userInfo.userName}
                    </Link>

                    <Link to='/' className="main-nav-item" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i>
                        Sign out
                    </Link>
                </div>

            </div>
        )

    }

    else {
        return (
            <div className="main-nav">
                <Link to="/">
                    <img src={logo} alt="logo" className="main-nav-logo" />
                </Link>

                <Link to='/Login' className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        )
    }

}

export default Header