import { theme } from '../Styles/theme';


function Home () {

    return (
        <div>
            <h1 style={styles.title}>Seja bem vindo!</h1>
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
}

export default Home;