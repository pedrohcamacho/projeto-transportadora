import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose} from '@fortawesome/free-solid-svg-icons'
import { theme } from '../Styles/theme';


function ModalWindow({modalIsOpen, closeModal, children}) {

  if(modalIsOpen)
  return (
    <div style={styles.background}> 
      <div style={styles.content}>
      <div style={styles.headerModal}>
          <button onClick={closeModal} style={styles.ModalCloseButton}>
            <FontAwesomeIcon icon={faClose} style={styles.ModalCloseButtonIcon}/>
          </button>
        </div>
          {children}
      </div>
  </div>
  )
}

const styles = {
background:{
  position:'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom:'0',
  backgroundColor: 'rgb(0,0,0,0.7)',
  zIndex: '1000'
},
  content: {
    position:'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: 60,
    backgroundColor:"#fff"
  },
 headerModal: {
    position:'fixed',
    top: '5%',
    left: '95%',
    flexDirection: "row",
    justifyContent: "flex-end",

ModalCloseButton: {
    display: "flex", 
},

ModalCloseButtonIcon: {
  color: theme.colors.primary,
  fontWeight: "bold",
  fontSize: "20px",
},
 }
}

export default ModalWindow;

  
 