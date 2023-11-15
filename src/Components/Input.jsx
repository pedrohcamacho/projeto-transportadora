import { theme } from '../Styles/theme'
function Input({Value, setValue,placeholder}) {
    
 
  return (
    <input placeholder={placeholder} 
    value={Value || ''} 
    onChange={(e)=> setValue(e.target.value)} 
    style={styles.formInput}/>
  )
    
}

const styles = {
    formInput: {
        display: "flex",
        height: "30px",
        borderRadius: "5px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: theme.colors.inputBorder,
        fontWeight:100,
        fontFamily: theme.fonts.text,
        color: theme.colors.primary,
        fontSize: "16px",
        paddingLeft:"2%",
        outlineColor:theme.colors.inputOutlineBorder,
        
      },
   
  
}

export default Input;

