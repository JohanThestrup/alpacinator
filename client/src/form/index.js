import React from "react";
import useSubmit from "../hooks/useSubmit";
import Col from "react-bootstrap/Col";
import ModalSubmit from "./components/ModalSubmit";
import FormAlpaca from "./components/FormAlpaca";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function FormView() {
    const navigate = useNavigate();
    const { formikForm, modalShow, setModalShow, isError } = useSubmit();

    function handleClick() {
        navigate("/listalpaca");
    }

    return (
        <>
            <Col>
                <Button
                    variant="link"
                    onClick={handleClick}
                    size="sm"
                    className="mb-3"
                >
                    View list
                </Button>
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
