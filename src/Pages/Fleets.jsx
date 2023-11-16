
import { useState } from 'react';
import ModalWindow from '../Components/ModalWindow';
import Table from '../Components/Table';
import { theme } from '../Styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruck } from '@fortawesome/free-solid-svg-icons';
import NewFleet from '../Components/NewFleet';
import {fleets} from '../Data/DataTable';

 function Fleets() {
  const [modalIsOpen, setIsOpen] = useState(false); 

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
    <h1 style={styles.title}>Frotas cadastradas</h1>
    <button style={styles.Button} onClick={openModal}>
     <FontAwesomeIcon icon={faTruck} style={styles.iconButton}/>
      Cadastrar frota</button>
     <div style={styles.table}>

         <Table data={fleets}/>
     </div>
     <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <NewFleet/>
      </ModalWindow>
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
  table:{
    marginTop: "3%"
  },
  Button: {
    width: 250,
    marginTop:"2%",
    height: "45px",
    borderRadius: "5px",
    textAlign: "center",
    border: "0px solid",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontFamily: theme.fonts.text,
    color:theme.colors.sidebarText,
    backgroundColor:theme.colors.card3,
    fontSize: "17px",
    fontWeight: 700,
    cursor:"pointer",
    textDecoration:"none"
  },
  iconButton:{
    fontSize:"14px",
    color:theme.colors.sidebarText
}
  }

export default Fleets;