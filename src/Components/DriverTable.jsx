import { theme } from "../Styles/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons'

 function DriverTable() {
  return (
      <table style={styles.Table}>
        <thead style={styles.tableThead}>
            <tr>
                <th style={styles.tableTh}>Nome Motorista</th>
                <th style={styles.tableTh}>Idade</th>
                <th style={styles.tableTh}>CPF</th>
                <th style={styles.tableTh}>RG</th>
                <th style={styles.tableTh}>Ações</th>
            </tr>
        </thead>
        <tbody> 
            <tr>
                <td style={styles.tableTd}>Pedro</td>
                <td style={styles.tableTd}>28</td>
                <td style={styles.tableTd}>123.456.798-10</td>
                <td style={styles.tableTd}>123445-78</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>João</td>
                <td style={styles.tableTd}>27</td>
                <td style={styles.tableTd}>123.456.798-10</td>
                <td style={styles.tableTd}>123445-78</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>  <tr>
                <td style={styles.tableTd}>Elias</td>
                <td style={styles.tableTd}>30</td>
                <td style={styles.tableTd}>123.456.798-10</td>
                <td style={styles.tableTd}>123445-78</td>
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

export default DriverTable;