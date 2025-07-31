import "./Number.css"

export function Number({textContent="None", disabled=false, onClick}){

    let aux = "";
    if(disabled){
        aux += " disabled";
    }

    let aux2 = "";
    if(!disabled){
        aux2 += " clickable"
    }

    const arrayColors = ["lightcoral", "lightgreen", "lightblue", "rgb(235, 235, 80)", "lightpink", "lightseagreen", "lightsalmon"];
    const number = parseInt(textContent);


    return (
        <div className={"numberContainer" + aux}>
            <div 
            className={"number" + aux + aux2} 
            onClick={(e) => {if(!disabled){onClick(e);}}} 
            style={{backgroundColor: arrayColors[number%arrayColors.length]}}
            >
                <p>{textContent}</p>
            </div>
        </div>
    );
}