import { theme } from '../Styles/theme'
import Caminhao from '../assets/caminhao.png';
import { Link } from 'react-router-dom';

function CardFoto() {  
 
  return (
    <div style={styles.content}>
        <div style={{flexDirection:"column"}}>
          <h1 style={styles.title}>Frotas Cadastradas</h1>
          <Link to="/frotas" style={styles.Button}>Consultar</Link>
        </div>
        <div>
            <img src={Caminhao} alt="" style={styles.imageStyle}/>
        </div>
    </div>
  )
    
}

const styles = {
  content:{
    display:"flex",
    justifyContent:"space-around",
    width: 800,
    height: 280,
    backgroundColor: theme.colors.primary,
    dropShadow: '(5px 5px 5px 5px black)',
    borderRadius: "10px"
  },
  title:{
    fontFamily: theme.fonts.text,
    color: theme.colors.sidebarText,
    marginTop:"7%",
    paddingBottom:"15%",
    fontWeight: 700
},
Button: {
  width: 200,
  height: "45px",
  borderRadius: "5px",
  textAlign: "center",
  border: "0px solid",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  fontFamily: theme.fonts.text,
  color:theme.colors.secondary,
  backgroundColor:theme.colors.sidebarText,
  fontSize: "17px",
  fontWeight: 700,
  cursor:"pointer",
  textDecoration:"none"
},
  imageStyle:{
    width: 370,
    height: 280,
    
  }
}

export default CardFoto;

