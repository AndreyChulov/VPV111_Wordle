import "./FieldCell.css"

/**
 *
 * @param char {string}
 * @returns {JSX.Element}
 * @constructor
 */
function FieldCell({char}) {
    return (
        <td className="FieldCell">{char}</td>
    )
}

export default FieldCell;