import FieldCell from "./FieldCell";
import "./FieldRow.css"

/**
 *
 * @param word {string}
 * @returns {JSX.Element}
 * @constructor
 */
function FieldRow({word}) {
    return (
        <tr>
            <FieldCell char={word[0] ?? ""}/>
            <FieldCell char={word[1] ?? ""}/>
            <FieldCell char={word[2] ?? ""}/>
            <FieldCell char={word[3] ?? ""}/>
            <FieldCell char={word[4] ?? ""}/>
        </tr>
    )
}

export default FieldRow;