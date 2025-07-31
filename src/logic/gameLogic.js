

export class game{

    previousInput = [];
    validChars = [];
    password = [];

    constructor(sizePassword, arrayValidValues){
        this.validChars = arrayValidValues.slice();
        arrayValidValues = arrayValidValues.slice();
        
        if(sizePassword > arrayValidValues.length){
            throw Error("Size of password is greater than number of valid chars");
        }
        
        // setting random password
        for(let i=0; i<sizePassword; i++){
            const randomIndex = this.#randomInteger(0, arrayValidValues.length-1);
            const removedValue = arrayValidValues.splice(randomIndex, 1)[0];
            // console.log("Choose the index " + randomIndex + ", removed the value " + removedValue + ", now array is " + arrayValidValues)
            this.password.push(removedValue) 
        }
    }

    #randomInteger(minVal, maxVal){
        let maxVal2 = maxVal+1;
        let minVal2 = minVal;
        let dif = maxVal2-minVal2;
        return Math.floor(
            minVal2 + Math.random()*dif
        );
    }

    sendInput(arrayAnswer){
        // checking size
        if(arrayAnswer.length != this.password.length){
            throw Error("Answer not the same size of password");
        }
        
        // checking valid elements
        for(let element of arrayAnswer){
            if(!this.validChars.includes(element)){
                throw Error("Input " + element + " not in list of valid array values (" + this.validChars + ")");
            }
        }

        // checking for repeated elements
        for(let i=0; i<arrayAnswer.length; i++){
            for(let j=0; j<arrayAnswer.length; j++){
                if(i!==j && arrayAnswer[i] === arrayAnswer[j]){
                    throw Error("Answer has two equal elements");
                }
            }
        }

        let rightValueRightPlace = 0;
        let rightValueWrongPlace = 0;
        let wrongValue = 0;
        
        for(let i=0; i<arrayAnswer.length; i++){
            const element = arrayAnswer[i];
            
            if(this.password[i] === element){
                rightValueRightPlace++;
            }
            else if(this.password.includes(element)){
                rightValueWrongPlace++;
            }
            else{
                wrongValue++;
            }
        }
        
        this.previousInput.push({
            input: arrayAnswer,
            rightElements: rightValueRightPlace,
            mixedElements: rightValueWrongPlace,
            wrongElements: wrongValue
        })
    }

    hasWon(){
        for(let input of this.previousInput){
            if(input.rightElements === this.password.length){
                return true;
            }
        }
        return false;
    }

    printValidChars(){
        console.log(this.validChars);
    }
}

// ["1", "2", "3", "4", "5", "6"]
export const exampleGame = new game(3, ["1", "2", "3"])

exampleGame.sendInput(["1", "2", "3"])
exampleGame.sendInput(["1", "3", "2"])
exampleGame.sendInput(["2", "1", "3"])
exampleGame.sendInput(["2", "3", "1"])
exampleGame.sendInput(["3", "1", "2"])
exampleGame.sendInput(["3", "2", "1"])
