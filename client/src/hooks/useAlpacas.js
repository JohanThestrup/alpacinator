import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import { farmMultiplierMap } from "../utils";

export default function useAlpacas() {
    const { data: alpacas, loading } = useFetch("getalpacas");
    const [selectedAlpacas, setSelectedAlpacas] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [farmCount, setFarmCount] = useState({
        svenssonsAlpacor: 0,
        alpacacenter: 0,
        karlssonsFarm: 0,
        importedAlpacas: 0,
    });

    useEffect(() => {
        function calculateTotalCost() {
            const cost = selectedAlpacas.reduce((acc, alp) => {
                return (
                    acc +
                    Math.round(alp.weight * farmMultiplierMap.get(alp.farm))
                );
            }, 0);

            setTotalCost(cost.toFixed(0));
        }
        calculateTotalCost();
    }, [selectedAlpacas]);

    function selectAlpaca(alpaca) {
        const isSelected = selectedAlpacas.some(
            (alp) => alp.alpaca_id === alpaca.alpaca_id
        );

        if (isSelected) {
            const newSelectedAlpacas = selectedAlpacas.filter(
                (alp) => alp.alpaca_id !== alpaca.alpaca_id
            );
            setSelectedAlpacas(newSelectedAlpacas);
        } else {
            setSelectedAlpacas((prevState) => [...prevState, alpaca]);
        }
        calculateFarmCount(alpaca.farm, !isSelected);
    }

    function calculateFarmCount(farmName, isSelected) {
        const newFarmCountState = farmCount;
        isSelected
            ? newFarmCountState[farmName]++
            : newFarmCountState[farmName]--;
        setFarmCount(newFarmCountState);
    }

    return {
        selectedAlpacas,
        selectAlpaca,
        totalCost,
        farmCount,
        alpacas,
        loading,
    };
}
