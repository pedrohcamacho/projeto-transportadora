import { useState } from 'react';
import ModalWindow from '../Components/ModalWindow';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faUsers, faFileLines, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { theme } from '../Styles/theme';
import Contratos from './Contratos';
import Clientes from './Clientes';

function Sidebar(props) {
  const [modalIsOpen, setIsOpen] = useState(false); 
  const [wichModal, setWichModal] = useState("");
  function openModal(modalProp) {
    setWichModal(modalProp)
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


    return (
    <>
        <div style={styles.sidebar}>
            <div style={Object.assign({},styles.logo)}>
                <div>
                    <FontAwesomeIcon icon={faTruck} style={styles.logoIcon}/>
                </div>
                <Link to="/" style={styles.logoText}>Home</Link>
            </div> 
            <div type='button' style={styles.option}>
                <FontAwesomeIcon icon={faFileLines} style={styles.icon}/>
                <a style={styles.sidebarLink} onClick={() => openModal("contrato")}>Contratos</a>
            </div>  
            <div style={styles.option}>
                <FontAwesomeIcon icon={faUsers} style={styles.icon}/> 
                <a style={styles.sidebarLink} onClick={() => openModal("clientes")}>Clientes</a>
            </div>  
            <div style={styles.option}>
                <FontAwesomeIcon icon={faLocationDot} style={styles.icon}/>
                <a style={styles.sidebarLink}>Rotas</a>
            </div>  
       
        </div>
        <div style={styles.divContent}>
    
            <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal}>
              {wichModal == "contrato" ? <Contratos/> : wichModal == "clientes" ? <Clientes/> : null}
            </ModalWindow>

            {props.children}

        </div>
    </>
    )
  }

  const styles = {
    sidebar: {
      display:"flex",
      flexDirection:"column",
      width: "200px",
      backgroundColor: theme.colors.primary,
      position: "absolute",
      height:"100%",
    },
    logo:{
      marginTop: "15%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      paddingBottom: "20%",
      justifyContent: "center"
    },
    logoIcon:{
      color: theme.colors.secondary,
    },
    logoText:{
      display: "block",
      color: theme.colors.secondary,
      padding: "16px",
      textDecoration: "none",
      fontFamily: theme.fonts.text,
      fontSize: 16,
      fontWeight: 900
    },
    option: {
      marginTop: "10%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: "7%"
    },
    icon: {
      color:theme.colors.sidebarText
  },
    sidebarLink: {
      display: "block",
      color: theme.colors.sidebarText,
      padding: "16px",
      textDecoration: "none",
      fontFamily: theme.fonts.text,
      fontWeight: 700,
      cursor: "pointer"
    },
    divContent: { 
      marginLeft: 220,
      padding: "1px",
    },
  }
  
  
  export default Sidebar
  