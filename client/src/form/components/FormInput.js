import React from "react";
import Form from "react-bootstrap/Form";

function FormInput({ formikForm, value, errors, name, touched, label }) {
    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                autoFocus={label === "Alpaca name"}
                type="text"
                onChange={formikForm.handleChange}
                onBlur={formikForm.handleBlur}
                value={value}
                name={name}
                isInvalid={!!errors}
                isValid={touched && !errors}
            />

            <Form.Control.Feedback type="invalid" role="invalidFeedback">
                {errors}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default FormInput;
