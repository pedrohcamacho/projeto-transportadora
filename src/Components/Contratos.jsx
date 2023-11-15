import { useState } from 'react';
import Input from '../Components/Input';
import { theme } from '../Styles/theme';

function Contratos() {
    const [contrato, setContrato] = useState(""); 
    return (
    <div>
        <h1>Contratos</h1>

        <div style={styles.formGroup}> 
        <label style={styles.formLabel}>Contrato</label>
        <Input Value={contrato} setValue={setContrato}/>
        </div> 
    </div>
    )
}

const styles = {
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
  
export default Contratos