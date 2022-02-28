import React from "react";
import Table from "react-bootstrap/Table";

function SummaryTable({ farmCount, totalCost }) {
    return (
        <Table striped bordered hover id="summary-table">
            <thead>
                <tr>
                    <th>Svenssons Alpacor</th>
                    <th>Alpacacenter</th>
                    <th>Karlssons Farm</th>
                    <th>Imported Alpacas</th>
                    <th>Total cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{farmCount.svenssonsAlpacor}</td>
                    <td>{farmCount.alpacacenter}</td>
                    <td>{farmCount.karlssonsFarm}</td>
                    <td>{farmCount.importedAlpacas}</td>
                    <td>{totalCost} SEK</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default SummaryTable;
