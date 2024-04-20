import Field from "./Field";
import WordInputer from "./WordInputer";

import React, { useState } from "react";

function Wordle() {

    let [wordArray, setWordArray] = useState(["", "", "", "", "", ""])
    console.log(wordArray)
    return [
        <WordInputer onWordEnteredHandler={x => {
            let word0 = wordArray[0];
            let word1 = wordArray[1];
            let word2 = wordArray[2];
            let word3 = wordArray[3];
            let word4 = wordArray[4];
            let words  = [x, word0, word1, word2, word3, word4];
            setWordArray(words)
        }} />,
        <Field wordArray={wordArray}/>
    ]
}

export default Wordle;