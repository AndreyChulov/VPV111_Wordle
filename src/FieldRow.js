import FieldCell from "./FieldCell";
import "./FieldRow.css"

/**
 *
 * @param {string}  cellChar
 * @param {number} cellIndex
 * @param {string} secretWord
 * @function
 */
function GetCellColor(cellChar, cellIndex, secretWord) {
    cellChar = cellChar ?? "";

    if (cellChar === ""){
        return "initial"
    } else if (secretWord[cellIndex] === cellChar) {
        return "#00FF00"
    }
    else if (secretWord.toLowerCase().includes(cellChar.toLowerCase())) {
        return "#FFFF00"
    } else {
        return "#8C8C92"
    }
}

/**
 *
 * @param word {string}
 * @param secretWord {string}
 * @returns {JSX.Element}
 * @constructor
 */
function FieldRow({word, secretWord}) {
    return (
        <tr>
            <FieldCell char={word[0] ?? ""} backgroundColor={GetCellColor(word[0], 0, secretWord)}/>
            <FieldCell char={word[1] ?? ""} backgroundColor={GetCellColor(word[1], 1, secretWord)}/>
            <FieldCell char={word[2] ?? ""} backgroundColor={GetCellColor(word[2], 2, secretWord)}/>
            <FieldCell char={word[3] ?? ""} backgroundColor={GetCellColor(word[3], 3, secretWord)}/>
            <FieldCell char={word[4] ?? ""} backgroundColor={GetCellColor(word[4], 4, secretWord)}/>
        </tr>
    )
}

export default FieldRow;