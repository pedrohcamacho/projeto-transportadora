import { theme } from "../Styles/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons'

 function PricingTable() {
  return (
      <table style={styles.Table}>
        <thead style={styles.tableThead}>
            <tr>
                <th style={styles.tableTh}>Faixa de peso</th>
                <th style={styles.tableTh}>Destino 1</th>
                <th style={styles.tableTh}>Destino 2</th>
                <th style={styles.tableTh}>Ações</th>
            </tr>
        </thead>
        <tbody> 
            <tr>
                <td style={styles.tableTd}>1 a 30</td>
                <td style={styles.tableTd}>R$ 50,00</td>
                <td style={styles.tableTd}>R$ 70,00</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>31 a 60</td>
                <td style={styles.tableTd}>R$ 80,00</td>
                <td style={styles.tableTd}>R$ 90,00</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>61 a 100</td>
                <td style={styles.tableTd}>R$ 90,00</td>
                <td style={styles.tableTd}>R$ 100,00</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>101 a 150</td>
                <td style={styles.tableTd}>R$ 110,00</td>
                <td style={styles.tableTd}>R$ 120,00</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>Pick-UP até 500 Kg</td>
                <td style={styles.tableTd}> R$ 2.500,00</td>
                <td style={styles.tableTd}> R$ 2.800,00</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>Truck até 14 ton</td>
                <td style={styles.tableTd}> R$ 4.000,00</td>
                <td style={styles.tableTd}> R$ 5.000,00</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>Bi-Truck até 18 ton</td>
                <td style={styles.tableTd}> R$ 5.000,00</td>
                <td style={styles.tableTd}> R$ 6.000,00</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>Carreta até 27 ton</td>
                <td style={styles.tableTd}> R$ 6.000,00</td>
                <td style={styles.tableTd}> R$ 7.000,00</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
        </tbody>
        </table>
  )
}

const styles = {
    Table:{
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "normal",
        borderCollapse: "collapse",
        width: "80%",
        maxWidth: "80%",
        whiteSpace: "nowrap",
        backgroundColor: "white"
      },
      tableThead:{
        backgroundColor: theme.colors.primary,
        color: theme.colors.sidebarText,
        textAlign: "left"
      },
      tableTh:{
        textAlign: "center", 
        padding: "6px",
        borderStyle: "solid",
        fontSize: "16px",
        fontFamily: theme.fonts.text,
        fontWeight: 700,
        color: theme.colors.sidebarText,
        backgroundColor: theme.colors.secondary,
      },
      tableTd:{
        textAlign: "center", 
        padding: "6px",
        fontFamily: theme.fonts.text,
        borderStyle: `1px solid ${theme.colors.primary}`, 
        fontWeight: 500,
        fontSize: "14px" 
      },
      action: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"
      },
      edit: { 
        color: theme.colors.edit, 
        fontSize: "14px" 
    },
      delete: { 
        color: theme.colors.error, 
        fontSize: "14px" 
    }
}

export default PricingTable;