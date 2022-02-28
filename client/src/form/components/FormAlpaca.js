import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormInput from "./FormInput";
import ColorPicker from "./ColorPicker";
import FarmSelect from "./FarmSelect";

function FormAlpaca({ formikForm }) {
    return (
        <Form onSubmit={formikForm.handleSubmit} id="alpaca-form">
            <FormInput
                formikForm={formikForm}
                value={formikForm.values.name}
                errors={formikForm.errors.name}
                name="name"
                touched={formikForm.touched.name}
                label="Alpaca name"
            />
            <FormInput
                formikForm={formikForm}
                value={formikForm.values.weight}
                errors={formikForm.errors.weight}
                name="weight"
                touched={formikForm.touched.weight}
                label="Weight"
            />
            <ColorPicker formikForm={formikForm} />
            <FarmSelect formikForm={formikForm} />

            <Button
                variant="primary"
                type="submit"
                disabled={formikForm.isSubmitting}
            >
                Save
            </Button>
            <Button
                variant="primary"
                type="reset"
                onClick={formikForm.handleReset}
            >
                Reset
            </Button>
        </Form>
    );
}

export default FormAlpaca;
