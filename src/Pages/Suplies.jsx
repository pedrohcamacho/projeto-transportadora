
import SuppliesTable from '../Components/SuppliesTable';
import { theme } from '../Styles/theme';

 function Suplies() {
  return (
    <div>
    <h1 style={styles.title}>Relatório de abastecimentos</h1>
     
     <div style={styles.table}>
         <SuppliesTable/>
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

export default Suplies;