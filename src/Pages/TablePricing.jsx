import PricingTable from '../Components/PricingTable';
import { theme } from '../Styles/theme';

function TablePricing() {
  return (
    <div>
       <h1 style={styles.title}>Tabela de valores</h1>
        
        <div style={styles.table}>
            <PricingTable/>
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

export default TablePricing;