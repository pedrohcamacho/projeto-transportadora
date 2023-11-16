import { theme } from "../Styles/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons'

 function SuppliesTable() {
  return (
      <table style={styles.Table}>
        <thead style={styles.tableThead}>
            <tr>
                <th style={styles.tableTh}>Código equipamento</th>
                <th style={styles.tableTh}>Descrição</th>
                <th style={styles.tableTh}>Ano / Modelo</th>
                <th style={styles.tableTh}>Placa</th>
                <th style={styles.tableTh}>Motorista</th>
                <th style={styles.tableTh}>Ações</th>
            </tr>
        </thead>
        <tbody> 
            <tr>
                <td style={styles.tableTd}>1623</td>
                <td style={styles.tableTd}>Mercedes Benz Blue Axor 1933</td>
                <td style={styles.tableTd}>2015/2015</td>
                <td style={styles.tableTd}>EFG2020</td>
                <td style={styles.tableTd}>Pedro</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>1520</td>
                <td style={styles.tableTd}>Volvo Fh 420</td>
                <td style={styles.tableTd}>2012/2012</td>
                <td style={styles.tableTd}>EFG2023</td>
                <td style={styles.tableTd}>Elias</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>1520</td>
                <td style={styles.tableTd}>Mercedes-Benz Axor 2644 </td>
                <td style={styles.tableTd}>2013/2013</td>
                <td style={styles.tableTd}>EFG2025</td>
                <td style={styles.tableTd}>João</td>
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

export default SuppliesTable;