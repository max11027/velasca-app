import React from 'react';
import { Alert } from "react-bootstrap";

const CustomAlert = ({show = false}) => (
    <div className="customAlert">
        {show}
        <Alert
            show={show}
            variant={"danger"}>
            Si è verificato un errore, riprova più tardi.
        </Alert>
    </div>
);

export default CustomAlert;