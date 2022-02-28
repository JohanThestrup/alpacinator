import React from "react";
import useSubmit from "../hooks/useSubmit";
import Col from "react-bootstrap/Col";
import ModalSubmit from "./components/ModalSubmit";
import FormAlpaca from "./components/FormAlpaca";
import NavigateButton from "../shared/NavigateButton";

function FormView() {
    const { formikForm, modalShow, setModalShow, isError } = useSubmit();

    return (
        <>
            <Col>
                <NavigateButton
                    path="listalpaca"
                    text="View list"
                    variant="link"
                    size="sm"
                    classes="mb-3"
                />
                <FormAlpaca formikForm={formikForm} />
            </Col>

            <ModalSubmit
                show={modalShow}
                onHide={() => setModalShow(false)}
                isError={isError}
            />
        </>
    );
}

export default FormView;
