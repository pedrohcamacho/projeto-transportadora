import { theme } from '../Styles/theme';
import CardFoto from '../Components/CardFoto';
import Card from '../Components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGasPump,faFileInvoiceDollar,faUserTie } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Home () {

    return (
        <div>
            <h1 style={styles.title}>Seja bem vindo!</h1>
           
            <div style={styles.cardFoto}>
                <CardFoto/>
            </div> 
            <div style={styles.card}>
                
                <Card>
                    <FontAwesomeIcon icon={faGasPump} style={styles.iconCard}/>
                    <Link to="/abastecimentos" style={styles.textCard}>Abastecimentos</Link>
                </Card>

                <Card Class='primary'>
                    <FontAwesomeIcon icon={faFileInvoiceDollar} style={styles.iconCard}/>
                    <Link to="/tabela-de-preços" style={styles.textCard}>Tabela de preços</Link>
                </Card>
    
                <Card Class='secondary'>
                <FontAwesomeIcon icon={faUserTie} style={styles.iconCard}/>
                <Link to="/motoristas" style={styles.textCard}>Motoristas</Link>
                </Card>
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
    cardFoto:{
        marginTop:"3%"
    },
    card:{
        width:"50%",
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-between",
        marginTop:"5%"
    },
    textCard:{
        fontFamily:theme.fonts.text,
        fontWeight: 700,
        color:theme.colors.sidebarText,
        textDecoration:"none"
    },
    iconCard:{
        fontSize:"25px",
        paddingBottom:"10%",
        color:theme.colors.sidebarText
    }
}

export default Home;