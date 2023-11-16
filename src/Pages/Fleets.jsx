
import FleetsTable from '../Components/FleetsTable';
import { theme } from '../Styles/theme';

 function Fleets() {
  return (
    <div>
    <h1 style={styles.title}>Frotas cadastradas</h1>
     
     <div style={styles.table}>
         <FleetsTable/>
     </div>
     
 </div>
  )
}


const styles = {
    title:{
      fontFamily: theme.fonts.text,
      color: theme.colors.primary,
      marginTop: "2%",
      fontWeight: 800
  },
  table:{
    marginTop: "3%"
  }
  }

export default Fleets;