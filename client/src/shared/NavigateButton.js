import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NavigateButton({ path, text, variant, size, classes }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/${path}`);
    }

    return (
        <Button
            onClick={handleClick}
            variant={variant}
            size={size}
            className={classes}
        >
            {text}
        </Button>
    );
}

export default NavigateButton;
