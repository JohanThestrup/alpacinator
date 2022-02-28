import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { successMessage, errorMessage } from "../data/messages";
import NavigateButton from "../../shared/NavigateButton";

function ModalSubmit({ onHide, show, isError }) {
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
                <NavigateButton
                    path="listalpaca"
                    text="View list"
                    variant="primary"
                />
            </Modal.Footer>
        </Modal>
    );
}

export default ModalSubmit;
