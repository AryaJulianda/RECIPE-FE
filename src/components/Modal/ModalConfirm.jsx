import './Modal.css';
const ModalConfirm = ({showConfirm,handleCloseModal,modalMessage,action}) => {
  return (
      <div className="screen" style={{display:showConfirm ? 'flex' : 'none'}} >
          <div className="modal-body">
              <h5>{modalMessage.header}</h5>
              <span>{modalMessage.text}</span>
              <button type="button" className="ok-btn" onClick={action} >Yes</button>
              <button type="button" className="no-btn" onClick={handleCloseModal} >No</button>
          </div>
      </div>
  )
}

export default ModalConfirm ;
