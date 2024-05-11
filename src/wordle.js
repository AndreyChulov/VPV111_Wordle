import Field from "./Field";
import WordInputer from "./WordInputer";
import Russian_nouns from "./Words/russian_nouns_5";

import React, { useState } from "react";

function Wordle() {

    let [wordArray, setWordArray] = useState(["", "", "", "", "", ""])
    let [secretWord, setSecretWord] = useState(Russian_nouns.RandomNoun)
    let [turnNo, setTurnNo] = useState(1)
    console.log(wordArray)
    return [
        <WordInputer onWordEnteredHandler={x => {
            if (Russian_nouns.Nouns.includes(x) === false){
                alert("Я не знаю, что ты ввел, у тебя есть еще один шанс, дарю!!!")
                return;
            }

            let word0 = wordArray[0];
            let word1 = wordArray[1];
            let word2 = wordArray[2];
            let word3 = wordArray[3];
            let word4 = wordArray[4];
            let words  = [x, word0, word1, word2, word3, word4];

            if (turnNo === 7){
                alert("Лууууузер, а слово было - [" + secretWord + "]");
                setSecretWord(Russian_nouns.RandomNoun)
                setTurnNo(1)
                setWordArray(["", "", "", "", "", ""])
            } else {
                setWordArray(words)
                setTurnNo(turnNo + 1)
            }
        }} />,
        <Field wordArray={wordArray} secretWord={secretWord}/>
    ]
}

export default Wordle;