import {useState} from 'react'
import Input from '../Components/Input';
import { theme } from '../Styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

function NewSupplie() {
    const [data, setData] = useState("");
    const [motorista, setMotorista] = useState("");
    const [posto, setPosto] = useState("");
    const [litros, setLitros] = useState("");
    const [combustivel, setCombustivel] = useState("");
    const [km, setKm] = useState("");
    const [message, setMessage] = useState("sucesso");
    
  return (
    <div>
              <div style={styles.form}>
        <div style={styles.form1}>
        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>Data</label>
            <Input Value={data} setValue={setData}/>
        </div> 

        <div style={Object.assign({},styles.formGroup ,{marginLeft:"3%"})}> 
            <label style={styles.formLabel}>Motorista</label>
            <Input Value={motorista} setValue={setMotorista}/>
        </div> 
        </div>
          <div style={styles.form1}>
          <div style={styles.formGroup}> 
              <label style={styles.formLabel}>Posto</label>
              <Input Value={posto} setValue={setPosto}/>
          </div> 
          <div style={Object.assign({},styles.formGroup ,{marginLeft:"3%"})}> 
              <label style={styles.formLabel}>Litros</label>
              <Input Value={litros} setValue={setLitros}/>
          </div> 
        </div>
        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>Combustível</label>
            <Input Value={combustivel} setValue={setCombustivel}/>
        </div> 
        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>Km Rodado</label>
            <Input Value={km} setValue={setKm}/>
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
    form1:{
      display:"flex",
      flexDirection: "row"
    },
    formGroup: { 
        marginTop: "5%", 
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

export default NewSupplie