import React from "react";
import Form from "react-bootstrap/Form";

function FarmSelect({ formikForm }) {
    return (
        <Form.Group className="mb-3" controlId="farm">
            <Form.Label>Alpaca farm</Form.Label>
            <Form.Select
                defaultValue="svenssonsAlpacor"
                onChange={formikForm.handleChange}
                name="farm"
            >
                <option value="svenssonsAlpacor">Svenssons Alpacor</option>
                <option value="alpacacenter">Alpacacenter</option>
                <option value="karlssonsFarm">Karlssons Farm</option>
                <option value="importedAlpacas">Imported Alpacas</option>
            </Form.Select>
        </Form.Group>
    );
}

export default FarmSelect;
