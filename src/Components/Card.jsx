import { theme } from '../Styles/theme'

function Card({Class="default", children}) {  
 
  return (
    <div style={Object.assign({},styles.content, Class=="primary" ? styles.primary : Class=="secondary" ? styles.secondary : styles.default )}>
       
       <div style={styles.childrenStyle}>
        {children}
       </div>
    </div>
  )
    
}

const styles = {
  content:{
    display:"flex",
    justifyContent:"space-around",
    width: 170,
    height: 140,
    dropShadow: '(5px 5px 5px 5px black)',
    borderRadius: "10px"
  },
  childrenStyle:{
    display:"flex",
    flexDirection:"column",
    alignItens:"center",
    justifyContent:"center"
  },
  default:{
    backgroundColor: theme.colors.primary,
  },
  primary:{
    backgroundColor: theme.colors.card2,
  },
  secondary:{
    backgroundColor: theme.colors.card3,
  }
}

export default Card;

