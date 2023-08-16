import './Modal.css';
import {Modal} from 'react-bootstrap';

const useModal = ({showModal,handleCloseModal,modalMessage}) => {
    return (
        
        <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false} id='Modal'>
            <Modal.Body>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5>{modalMessage.header}</h5>
                    <span>{modalMessage.text}</span>
                    <button type="button" className="btn" onClick={handleCloseModal} >
                    OK
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default useModal ;

// <div id="Modal" aria-hidden="true">
//     <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//             <div className="modal-body d-flex flex-column justify-content-center align-items-center">
//                 <h5>You're all set!</h5>
//                 <span>Please check your email account for verification</span>
//                 <button type="button" className="btn" onClick={handleCloseModal}>OK</button>
//             </div>
//         </div>
//     </div>
// </div>