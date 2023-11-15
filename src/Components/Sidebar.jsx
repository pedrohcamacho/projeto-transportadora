import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faUsers, faFileLines, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { theme } from '../Styles/theme';


function Sidebar(props) {
 
    return (
    <>
        <div style={styles.sidebar}>
            <div style={Object.assign({},styles.logo)}>
                <div>
                    <FontAwesomeIcon icon={faTruck} style={styles.logoIcon}/>
                </div>
                <Link to="/" style={styles.logoText}>Home</Link>
            </div> 
            <div style={styles.option}>
                <FontAwesomeIcon icon={faFileLines} style={styles.icon}/>
                <Link to="/contratos" style={styles.sidebarLink}>Contratos</Link>
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
      fontWeight: 700
    },
    active: { backgroundColor: theme.colors.activeSidebarBackground },
    first: { marginTop: "23%" },
    divContent: { marginLeft: 220, padding: "1px", height: "100vh",overflow:"scroll" }
  }
  
  
  export default Sidebar
  