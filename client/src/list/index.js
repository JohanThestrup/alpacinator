import React from "react";
import useAlpacas from "../hooks/useAlpacas";
import AlpacaTable from "./components/AlpacaTable";
import SummaryTable from "./components/SummaryTable";
import NavigateButton from "../shared/NavigateButton";

function ListView() {
    const { selectAlpaca, totalCost, farmCount, alpacas, loading } =
        useAlpacas();

    return !loading && alpacas.length > 0 ? (
        <>
            <AlpacaTable
                alpacas={alpacas}
                selectAlpaca={selectAlpaca}
                loading={loading}
            />
            <SummaryTable totalCost={totalCost} farmCount={farmCount} />
            <NavigateButton
                path="addalpaca"
                text="Add alpaca"
                variant="primary"
            />
        </>
    ) : (
        <>
            <h1>No alpacas to see...</h1>
            <NavigateButton
                path="addalpaca"
                text="Add alpaca"
                variant="primary"
            />
        </>
    );
}

export default ListView;
