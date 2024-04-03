import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { updateUsername } from '../../actions';
import Modal from "../../Components/Modal";
import { AccountWrapper } from "../../Components/Account";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.scss";
import Button from "../../Utils/button";

export function EditUser() {
    const userInfo = useSelector(state => state.userInfo);
    const [newUserName, setNewUserName] = useState(userInfo.userName);
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

    const postUserName = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ userName: newUserName }))
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName: newUserName }),
            });
            if (response.ok) {
                dispatch(updateUsername(newUserName));
                setShowModal(true);
                setModalMessage('Your username has been successfully updated!');
            } else {
                setShowModal(true);
                setModalMessage('An error has occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setShowModal(true);
            setModalMessage('An error has occurred. Please try again');
        }
    }

    const cancel = () => {
        navigate('/user');
    }

    const closeModal = () => {
        setShowModal(false);
        navigate('/user');
    }

    const userToken = sessionStorage.getItem('token');

    if (userToken) {
        return (
            <div className="main ">
                <h2>Edit user info</h2>
                <form className="edit-form">
                    <div className="edit-form-inputwrapper">
                        <label className="edit-form-inputwrapper-label" htmlFor='userName'>User Name:</label>
                        <input className="edit-form-inputwrapper-input" id='userName' value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
                    </div>
                    <div className="edit-form-inputwrapper">
                        <label className="edit-form-inputwrapper-label" htmlFor='firstName'>First Name:</label>
                        <input className="edit-form-inputwrapper-input" id='firstName' value={userInfo.firstName} disabled />
                    </div>
                    <div className="edit-form-inputwrapper">
                        <label className="edit-form-inputwrapper-label" htmlFor='lastName'>Last Name:</label>
                        <input className="edit-form-inputwrapper-input" id='lastName' value={userInfo.lastName} disabled />
                    </div>

                    <div className="edit-form-submitwrapper">
                        <Button onClick={postUserName} content='Save' />
                        <Button onClick={cancel} content='Cancel' />
                    </div>
                </form>

                <AccountWrapper />

                {/* Affichage de la modal */}
                <Modal isOpen={showModal} onClose={closeModal} message={modalMessage} />
            </div>)
    }
    else {
        return <Navigate to='/Login' />
    }


}
