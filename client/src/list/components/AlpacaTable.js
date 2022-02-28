import React from "react";
import AlpacaRow from "./AlpacaRow";
import Table from "react-bootstrap/Table";

function AlpacaTable({ alpacas, selectAlpaca, loading }) {
    return (
        <Table striped bordered hover id="alpaca-table">
            <thead>
                <tr>
                    <th>Alpaca name</th>
                    <th>Weight</th>
                    <th>Alpaca color</th>
                    <th>Alpaca cost</th>
                    <th>Selected Alpaca</th>
                </tr>
            </thead>
            <tbody>
                {!loading &&
                    alpacas.map((alpaca, idx) => {
                        return (
                            <AlpacaRow
                                alpaca={alpaca}
                                selectAlpaca={selectAlpaca}
                                key={idx}
                            />
                        );
                    })}
            </tbody>
        </Table>
    );
}

export default AlpacaTable;
