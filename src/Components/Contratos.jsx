import { useState } from 'react';
import Input from '../Components/Input';
import { theme } from '../Styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

function Contratos() {
    const [contrato, setContrato] = useState(""); 
    const [data, setDataContrato] = useState(""); 
    const [valorContrato, setValorContrato] = useState("");
    const [cliente, setCliente] = useState("Selecionar");
    const [message, setMessage] = useState("");

    return (
    <div>
        <h1 style={styles.title}>Contratos</h1>
        <div style={styles.form}>
            
        
        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>Contrato</label>
            <Input Value={contrato} setValue={setContrato}/>
        </div> 

        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>Data do contrato</label>
            <Input Value={data} setValue={setDataContrato}/>
        </div> 
        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>Selecionar Cliente</label>
            <select name="select" value={cliente} onChange={e => setCliente(e.target.value)} style={styles.select}>
            <option value="Selecionar">Selecionar</option>
              <option value="Cliente 1">Cliente 1</option>
              <option value="Finalizado">Cliente 2</option>
            </select>
        </div> 

        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>Valor do contrato</label>
            <Input Value={valorContrato} setValue={setValorContrato}/>
        </div> 
        <div style={styles.formButtons}>
            <button type="button" style={Object.assign({},styles.Button, styles.secondary)} onClick={()=> setMessage("sucesso")}>Salvar (sucesso)</button>
            <button type="button" style={Object.assign({},styles.Button, styles.primary, {marginLeft: "3%"})} onClick={()=> setMessage("erro")}>
                Salvar (erro)
            </button>
        </div>  
        </div>

        <div style={Object.assign({}, message=="sucesso" ? styles.success : styles.error)}>
            {message == "sucesso" ? 
            <div style={styles.message}>
                <FontAwesomeIcon icon={faCheckCircle} style={styles.success}/>
                <p style={styles.textMessage}>Salvo com sucesso!</p>
            </div> : 
            <div style={styles.message}>
                <FontAwesomeIcon icon={faCircleXmark} style={styles.error}/>
                <p style={styles.textMessage}>Ocorreu um erro ao salvar!</p>
            </div>
            }
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
    form:{
        paddingBottom:"5%"
    },
    formGroup: { 
        marginTop: "5%", 
        width: "600px", 
        display: "flex",
        flexDirection: "column"
    },
    formLabel: {
        fontFamily: theme.fonts.text,
        color: theme.colors.primary,
        fontWeight:400,
        fontSize: "20px",
        paddingBottom: "2%",
        paddingRight:"5%"
      },
      formButtons: { 
        marginTop: "2.5%", 
        display:'flex',
        flexDirection: "row" 
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
        fontSize: "17px",
        fontWeight: 700,
        cursor:"pointer",
        textDecoration:"none"
      },
      select: {
        display: "flex",
        height: "30px",
        width:'255px',
        borderRadius: "5px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: theme.colors.inputBorder,
        fontFamily: theme.fonts.text,
        color: theme.colors.primary,
        backgroundColor:theme.colors.sidebarText,
        fontSize: "20px",
        paddingLeft:"2%",
        outlineColor:theme.colors.inputOutlineBorder,
      },
      primary:{
        color:theme.colors.primary,
        backgroundColor: theme.colors.inputBorder,
      },
      secondary:{
        color:theme.colors.sidebarText,
        backgroundColor: theme.colors.secondary,
      },
      message: {
        display:"flex",
        flexDirection:"row"
      },
      textMessage:{
        fontSize: "14px",
        fontWeight: 700,
        fontFamily: theme.fonts.text,
        marginLeft:"2%"
      },
      success:{
        color:theme.colors.success
      },
      error:{
        color:theme.colors.error
      }
      
}
  
export default Contratos