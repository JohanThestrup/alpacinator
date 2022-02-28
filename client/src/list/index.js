import React from "react";
import useAlpacas from "../hooks/useAlpacas";
import AlpacaTable from "./components/AlpacaTable";
import SummaryTable from "./components/SummaryTable";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ListView() {
    const navigate = useNavigate();
    const { selectAlpaca, totalCost, farmCount, alpacas, loading } =
        useAlpacas();

    function handleClick() {
        navigate("/addalpaca");
    }

    return !loading && alpacas.length > 0 ? (
        <>
            <AlpacaTable
                alpacas={alpacas}
                selectAlpaca={selectAlpaca}
                loading={loading}
            />
            <SummaryTable totalCost={totalCost} farmCount={farmCount} />
            <Button variant="primary" onClick={handleClick}>
                Add alpaca
            </Button>
        </>
    ) : (
        <>
            <h1>No alpacas to see...</h1>
            <Button variant="primary" onClick={handleClick}>
                Add alpaca
            </Button>
        </>
    );
}

export default ListView;
