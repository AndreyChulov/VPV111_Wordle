import "./FieldCell.css"

/**
 *
 * @param char {string}
 * @param backgroundColor {string}
 * @returns {JSX.Element}
 * @constructor
 */
function FieldCell({char, backgroundColor}) {
    return (
        <td className="FieldCell" style={{backgroundColor: backgroundColor}}>{char}</td>
    )
}

export default FieldCell;