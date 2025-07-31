import "./NumberArray.css"
import { Number } from "./Number"

export function NumberArray({arrayValues, rowIndex, disabled=false, returnClickedFunction=(index)=>{}}){

    return (
        <div className="NumberArray">
            {arrayValues.map((numberSelected, index) => {
                return <Number disabled={disabled} textContent={numberSelected} onClick={(e) => {
                    returnClickedFunction(index);
                }}></Number>
            })}
        </div>
    )

}