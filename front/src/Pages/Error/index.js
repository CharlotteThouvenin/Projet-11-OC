import { useNavigate } from "react-router-dom"
import Button from "../../Utils/button"
import './style.scss'

function Error() {

    const navigate = useNavigate()
    const redirection = () => {
        navigate("/")
    }
    return (
        <div className="error">
            <h1>Sorry ...</h1>
            <p>this page doesn't exist</p>
            <Button content="Return to homepage" onClick={redirection} />
        </div>
    )
}

export default Error