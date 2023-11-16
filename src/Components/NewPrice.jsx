import {useState} from 'react'
import Input from '../Components/Input';
import { theme } from '../Styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

function NewPrice() {
    const [peso, setPeso] = useState("");
    const [destino1, setDestino1] = useState("");
    const [destino2, setDestino2] = useState("");
    const [message, setMessage] = useState("");
    
  return (
    <div>
              <div style={styles.form}>
        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>Peso</label>
            <Input Value={peso} setValue={setPeso}/>
        </div> 

        <div style={Object.assign({},styles.formGroup)}> 
            <label style={styles.formLabel}>Destino 1</label>
            <Input Value={destino1} setValue={setDestino1}/>
        </div> 
        
          <div style={styles.formGroup}> 
              <label style={styles.formLabel}>Destino 2</label>
              <Input Value={destino2} setValue={setDestino2}/>
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

export default NewPrice