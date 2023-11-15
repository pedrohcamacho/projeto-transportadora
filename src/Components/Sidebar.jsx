import { useState } from 'react';
import ModalWindow from '../Components/ModalWindow';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faUsers, faFileLines, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { theme } from '../Styles/theme';
import Input from '../Components/Input';

function Sidebar(props) {
  const [modalIsOpen, setIsOpen] = useState(false); 
  const [contrato, setContrato] = useState(""); 
  function openModal() {
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
            <div type='button' style={styles.option} onClick={openModal}>
                <FontAwesomeIcon icon={faFileLines} style={styles.icon}/>
                <a style={styles.sidebarLink} onClick={openModal}>Contratos</a>
            </div>  
            <div style={styles.option}>
                <FontAwesomeIcon icon={faUsers} style={styles.icon}/> 
                <Link to="/clientes" style={styles.sidebarLink}>Clientes</Link>
            </div>  
            <div style={styles.option}>
                <FontAwesomeIcon icon={faLocationDot} style={styles.icon}/>
                <Link to="/rotas" style={styles.sidebarLink}>Rotas</Link>
            </div>  
       
        </div>
        <div style={styles.divContent}>
            {props.children}

            <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal}>
                <h1>Contratos</h1>

                <div style={styles.formGroup}> 
                  <label style={styles.formLabel}>Contrato</label>
                  <Input Value={contrato} setValue={setContrato}/>
                </div> 

            </ModalWindow>
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
      height: "100vh",
      overflow:"scroll" 
    },
    formGroup: { 
      marginTop: "3%", 
      width: "600px", 
      display: "flex" ,
  },
  formLabel: {
      fontFamily: theme.fonts.text,
      color: theme.colors.primary,
      fontWeight:400,
      fontSize: "20px",
      paddingBottom: "2%",
      paddingRight:"5%"
    },
  }
  
  
  export default Sidebar
  