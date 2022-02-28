import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const successMessage = {
    header: "Success! 🔥",
    body: "You successfully added an Alpaca! 🦙",
};
const errorMessage = {
    header: "Error! 🚨",
    body: "Something went wrong when submitting your Alpaca! 🦙",
};

function ModalSubmit({ onHide, show, isError }) {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/listalpaca");
    }

    return (
        <Modal
            onHide={onHide}
            show={show}
            size="s"
            aria-labelledby="modal-submit"
            centered
        >
            <Modal.Body>
                <h4>
                    {!isError ? successMessage.header : errorMessage.header}
                </h4>
                <p>{!isError ? successMessage.body : errorMessage.body}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant="secondary">
                    Close
                </Button>
                <Button onClick={handleClick} variant="primary">
                    View list
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalSubmit;
