import { theme } from "../Styles/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons'


const Row = ({record}) => {
    const keys = Object.keys(record)
    return (
        <tr key={record.id}>
            {keys.map(key => <td style={styles.tableTd}key={key}>{record[key]}</td>)}     
            <td style={styles.tableTd}>
                <div style={styles.action}>
                    <FontAwesomeIcon icon={faPen} style={styles.edit}/>
                    <FontAwesomeIcon icon={faTrash} style={styles.delete}/>
                </div>
            </td> 
        </tr>
    )
}

 function Table({data}) {
    const keys = Object.keys(data[0])

  return (
      <table style={styles.Table}>
        <thead style={styles.tableThead}>
            <tr>
                {keys.map(key => <th style={styles.tableTh} key={key}>{key}</th>)}
                <th style={styles.tableTh}>Ações</th>
            </tr>
        </thead>
        <tbody> 
          {data.map(record => <Row record={record}/>)}
          
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

export default Table;