import { theme } from "../Styles/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons'

 function SuppliesTable() {
  return (
      <table style={styles.Table}>
        <thead style={styles.tableThead}>
            <tr>
                <th style={styles.tableTh}>Data</th>
                <th style={styles.tableTh}>Motorista</th>
                <th style={styles.tableTh}>Posto</th>
                <th style={styles.tableTh}>Litros</th>
                <th style={styles.tableTh}>Combustível</th>
                <th style={styles.tableTh}>R$/Litro</th>
                <th style={styles.tableTh}>R$ Total</th>
                <th style={styles.tableTh}>Km/Veículo</th>
                <th style={styles.tableTh}>Km/Litro</th>
                <th style={styles.tableTh}>Diferença abastecimento</th>
                <th style={styles.tableTh}>Ações</th>
            </tr>
        </thead>
        <tbody> 
            <tr>
                <td style={styles.tableTd}>16/11/2023</td>
                <td style={styles.tableTd}>Pedro</td>
                <td style={styles.tableTd}>Ipiranga</td>
                <td style={styles.tableTd}>15</td>
                <td style={styles.tableTd}>Etanol</td>
                <td style={styles.tableTd}>R$ 3,50</td>
                <td style={styles.tableTd}>R$ 52,50</td>
                <td style={styles.tableTd}>10.000</td>
                <td style={styles.tableTd}>4,29</td>
                <td style={styles.tableTd}>0</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>15/11/2023</td>
                <td style={styles.tableTd}>Elias</td>
                <td style={styles.tableTd}>Ipiranga</td>
                <td style={styles.tableTd}>15</td>
                <td style={styles.tableTd}>Etanol</td>
                <td style={styles.tableTd}>R$ 3,60</td>
                <td style={styles.tableTd}>R$ 64,80</td>
                <td style={styles.tableTd}>10.000</td>
                <td style={styles.tableTd}>5,00</td>
                <td style={styles.tableTd}>0</td>
                <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
                </td>
            </tr>
            <tr>
                <td style={styles.tableTd}>14/11/2023</td>
                <td style={styles.tableTd}>João</td>
                <td style={styles.tableTd}>Shell</td>
                <td style={styles.tableTd}>15</td>
                <td style={styles.tableTd}>Etanol</td>
                <td style={styles.tableTd}>R$ 3,60</td>
                <td style={styles.tableTd}>R$ 64,80</td>
                <td style={styles.tableTd}>10.000</td>
                <td style={styles.tableTd}>5,00</td>
                <td style={styles.tableTd}>0</td>
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
        backgroundColor: theme.colors.primary,
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