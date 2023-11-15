import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { theme } from '../Styles/theme';

function Home () {
    return (
        <div>
            <h1 style={styles.title}>Seja bem vindo!</h1>
            <FontAwesomeIcon icon={faHome} style={styles.icon}/>
        </div>  
    )
}

const styles = {
    title:{
        fontFamily: theme.fonts.bold,
        color: theme.colors.primary,
        marginTop: "2%"
    },
}

export default Home;