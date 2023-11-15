import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose} from '@fortawesome/free-solid-svg-icons'
import { theme } from '../Styles/theme';


function ModalWindow({modalIsOpen, closeModal, children}) {

  Modal.setAppElement(document.getElementById('root'));
  
  return (
    <Modal
    isOpen={modalIsOpen}
    style={styles.customModalStyles.content}
    contentLabel="Editar"
  >
    <div style={styles.headerModal}>
      <button onClick={closeModal} style={styles.ModalCloseButton}>
        <FontAwesomeIcon icon={faClose} style={styles.ModalCloseButtonIcon}/>
      </button>
    </div>

    {children}
    
  </Modal>
  )
}

const styles = {
  customModalStyles: {
  content: {
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    
  }
  },
 headerModal: {
    display: "flex", 
    flexDirection: "row",
    justifyContent: "flex-end",
},

ModalCloseButton: {
    display: "flex", 
},

ModalCloseButtonIcon: {
  color: theme.colors.title,
  fontWeight: "bold",
  fontSize: "20px",
},

}

export default ModalWindow;

  
 