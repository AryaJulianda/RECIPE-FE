import './Modal.css';

const Modal = ({showModal,handleCloseModal,modalMessage}) => {
    return (
        <div className="screen" style={{display:showModal ? 'flex' : 'none'}} >
            <div className="modal-body">
                <h5>{modalMessage.header}</h5>
                <span>{modalMessage.text}</span>
                <button type="button" className="ok-btn" onClick={handleCloseModal} >
                OK
                </button>
            </div>
        </div>
    )
}

export default Modal ;
