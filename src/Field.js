import FieldRow from "./FieldRow";
import "./Field.css";

/**
 *
 * @param wordArray {Array<string>}
 * @returns {JSX.Element}
 * @constructor
 */
function Field({wordArray}) {
    return (
      <div className="Field">
          <table>
              <FieldRow word={wordArray[0] ?? ""} />
              <FieldRow word={wordArray[1] ?? ""} />
              <FieldRow word={wordArray[2] ?? ""} />
              <FieldRow word={wordArray[3] ?? ""} />
              <FieldRow word={wordArray[4] ?? ""} />
              <FieldRow word={wordArray[5] ?? ""} />
          </table>
      </div>
    );
}

export default Field;