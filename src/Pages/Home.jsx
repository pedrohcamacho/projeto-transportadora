import { theme } from '../Styles/theme';
import CardFoto from '../Components/CardFoto';

function Home () {

    return (
        <div>
            <h1 style={styles.title}>Seja bem vindo!</h1>
           
            <div style={styles.card}>
                <CardFoto/>
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
    card:{
        marginTop:"3%"
    }
}

export default Home;