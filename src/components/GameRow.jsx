
import { NumberArray } from "./NumberArray";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./GameRow.css"

export function PreviousGameRow({gameInput, disabled=false, returnClickedFunction=(index)=>{}}){

    // return <p style={{width: "fit-content", display: "block"}}>Batata</p>

    return <Row>
        <Col className="col1">
            <NumberArray arrayValues={gameInput.input} disabled={disabled} returnClickedFunction={returnClickedFunction}></NumberArray>
        </Col>
        <Col className="col2">
            <div className="rowResults">
                <p style={{color: "green"}}>{gameInput.rightElements} x ✔️</p>
                <p style={{color: "yellow"}}>{gameInput.mixedElements} x ⚠️</p>
                <p style={{color: "red"}}>{gameInput.wrongElements} x ❌</p>
            </div>
        </Col>
    </Row>
}

export function CurrentGameRow({currentArray, returnClickedFunction=(index)=>{}, onButton=()=>{}}){

    return <Row className="lastRow">
        <Col className="col1">
            <NumberArray arrayValues={currentArray} returnClickedFunction={returnClickedFunction}></NumberArray>
        </Col>
        <Col className="col2">
            <Button onClick={onButton}>Enviar</Button>
        </Col>
    </Row>
}

