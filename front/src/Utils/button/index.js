import './style.scss'

const Button = ({ onClick, content }) => {
    return (
        <button className='button' onClick={onClick}>{content}</button>
    );
};

export default Button;
