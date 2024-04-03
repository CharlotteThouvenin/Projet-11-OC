import SignInForm from "../../Components/SignInForm"
import './style.scss'




function Login () {
    return (
        <div className="sign-in">
            <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
        <SignInForm />
            </section>
        </div>
    )
}

export default Login