
import './style.scss';

const Modal = ({ isOpen, onClose, message }) => {
    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={onClose}>x</span>
                        <p>{message}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
