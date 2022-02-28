import React from "react";
import { calculateAlpacaCost } from "../../utils";

function AlpacaRow({ alpaca, selectAlpaca }) {
    return (
        <tr>
            <td>{alpaca.name}</td>
            <td>{alpaca.weight} kilograms</td>
            <td style={{ backgroundColor: alpaca.color }} role="alpaca-color" />
            <td>{calculateAlpacaCost(alpaca.weight, alpaca.farm)} SEK</td>
            <td>
                <input
                    type="checkbox"
                    onChange={() => selectAlpaca(alpaca)}
                ></input>
            </td>
        </tr>
    );
}

export default AlpacaRow;
