  
import { useState } from 'react';
import Input from '../Components/Input';
import { theme } from '../Styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

function Clientes() {
    const [nome, setNome] = useState(""); 
    const [Cnpj, setCnpj] = useState(""); 
    const [celular, setCelular] = useState("");
    const [inscricao, setInscricao] = useState("");
    const [endereco, setEndereco] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
    <div>
        <h1 style={styles.title}>Clientes</h1>
        <div style={styles.form}>
        <div style={styles.form1}>
        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>Nome</label>
            <Input Value={nome} setValue={setNome}/>
        </div> 

        <div style={Object.assign({},styles.formGroup ,{marginLeft:"3%"})}> 
            <label style={styles.formLabel}>CNPJ ou CPF</label>
            <Input Value={Cnpj} setValue={setCnpj}/>
        </div> 
        </div>
          <div style={styles.form1}>
          <div style={styles.formGroup}> 
              <label style={styles.formLabel}>RG ou IE</label>
              <Input Value={inscricao} setValue={setInscricao}/>
          </div> 
          <div style={Object.assign({},styles.formGroup ,{marginLeft:"3%"})}> 
              <label style={styles.formLabel}>Contato</label>
              <Input Value={celular} setValue={setCelular}/>
          </div> 
        </div>
        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>E-mail</label>
            <Input Value={email} setValue={setEmail}/>
        </div> 
        <div style={styles.formGroup}> 
            <label style={styles.formLabel}>Endereço</label>
            <Input Value={endereco} setValue={setEndereco}/>
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
  
export default Clientes