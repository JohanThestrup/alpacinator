import React from "react";
import Form from "react-bootstrap/Form";

function ColorPicker({ formikForm }) {
    return (
        <Form.Group className="mb-3" controlId="color">
            <Form.Label>Color picker</Form.Label>
            <Form.Control
                type="color"
                name="color"
                defaultValue="#563d7c"
                title="Choose your color"
                onChange={formikForm.handleChange}
            />
        </Form.Group>
    );
}

export default ColorPicker;
