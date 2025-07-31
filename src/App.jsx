import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import { useRef, useState } from 'react';

import { game, exampleGame } from './logic/gameLogic';

import { Container } from 'react-bootstrap';
import { NumberArray } from './components/NumberArray';
import { PreviousGameRow, CurrentGameRow } from './components/GameRow';

function App() {

    const [tick, setTick] = useState(0);
    function tickRerender(){setTick(t => t+1)};

    const validValues = ["1", "2", "3", "4", "5", "6"];
    
    const gameRef = useRef(new game(4, validValues));
    
    let arrayAnswerIndex = useRef(Array(gameRef.current.password.length).fill(0));
    function arrayAnswer(){
        return arrayAnswerIndex.current.map(index => validValues[index]);
    }

    function onClickIndex(index){
        // console.log(index);
        arrayAnswerIndex.current[index] = (arrayAnswerIndex.current[index] + 1) % validValues.length;
        tickRerender();
    }
    function resetIndexArray(){

    }
    function dealButtonClick(e){
        try{
            gameRef.current.sendInput(arrayAnswer());
            tickRerender();
        }
        catch(error){
            if(error.message === "Answer has two equal elements"){
                // do nothing
                console.info("User tried to put two equal numbers, input ignored");
            }
            else{
                throw error;
            }
        }
    }

    const hasWon = gameRef.current.hasWon();

    return <div className="app hiddenScrollable">
        <div className="game">

            <Container>
                {gameRef.current.previousInput.map(input => <PreviousGameRow gameInput={input} disabled ></PreviousGameRow>)}

                {!hasWon && <CurrentGameRow currentArray={arrayAnswer()} returnClickedFunction={onClickIndex} onButton={dealButtonClick} ></CurrentGameRow>}
            </Container>

            {hasWon && <>
                <h1>Sucesso!</h1>
                <p>A senha era: {gameRef.current.password}</p>
            </>}

        </div>

    </div>
}

export default App
