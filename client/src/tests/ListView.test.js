import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { server, emptyServer } from "./mocks/apiMock";

describe("ListView", () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/listalpaca"]}>
                <App />
            </MemoryRouter>
        );
    });

    describe("No alpacas", () => {
        beforeAll(() => emptyServer.listen());
        afterEach(() => emptyServer.resetHandlers());
        afterAll(() => emptyServer.close());

        test("should tell the user that no alpacas exists if no alpacas have been added", () => {
            const noAlpacaText = screen.getByText("No alpacas to see...");
            expect(noAlpacaText).toBeInTheDocument();
        });

        test("should render a button with text Add alpaca", () => {
            const addAlpacaButton = screen.getByText("Add alpaca");
            expect(addAlpacaButton).toBeInTheDocument();
            expect(addAlpacaButton instanceof HTMLButtonElement).toBe(true);
        });
    });

    describe("Alpacas exists", () => {
        beforeAll(() => server.listen());
        afterEach(() => server.resetHandlers());
        afterAll(() => server.close());

        test("should render two tables", async () => {
            const tables = await screen.findAllByRole("table");

            expect(tables[0]).toBeInTheDocument();
            expect(tables[1]).toBeInTheDocument();
            expect(tables[2]).not.toBeDefined();
        });

        describe("Alpaca table", () => {
            test("should render 5 columns", async () => {
                const col1 = await screen.findByText("Alpaca name");
                const col2 = await screen.findByText("Weight");
                const col3 = await screen.findByText("Alpaca color");
                const col4 = await screen.findByText("Alpaca cost");
                const col5 = await screen.findByText("Selected Alpaca");

                expect(col1).toBeInTheDocument();
                expect(col2).toBeInTheDocument();
                expect(col3).toBeInTheDocument();
                expect(col4).toBeInTheDocument();
                expect(col5).toBeInTheDocument();
            });

            test("should render alpaca data", async () => {
                const alpacaName = await screen.findByText("Sven");
                const alpacaWeight = await screen.findByText("77 kilograms");
                const alpacaColor = await screen.getAllByRole("alpaca-color");
                const alpacaCost = await screen.findByText("100 SEK");

                expect(alpacaName).toBeInTheDocument();
                expect(alpacaWeight).toBeInTheDocument();
                expect(alpacaColor[0]).toHaveStyle("background-color: #563d7c");
                expect(alpacaCost).toBeInTheDocument();
            });
        });
        describe("Summary table", () => {
            test("should render five columns", async () => {
                const col1 = await screen.findByText("Svenssons Alpacor");
                const col2 = await screen.findByText("Alpacacenter");
                const col3 = await screen.findByText("Karlssons Farm");
                const col4 = await screen.findByText("Imported Alpacas");
                const col5 = await screen.findByText("Total cost");

                expect(col1).toBeInTheDocument();
                expect(col2).toBeInTheDocument();
                expect(col3).toBeInTheDocument();
                expect(col4).toBeInTheDocument();
                expect(col5).toBeInTheDocument();
            });

            test("should have all values set to zero if no alpaca is selected", async () => {
                const tables = await screen.findAllByRole("table");
                const summaryTable = tables[1];
                const rows = summaryTable.getElementsByTagName("td");

                expect(rows[0].textContent).toMatch("0");
                expect(rows[1].textContent).toMatch("0");
                expect(rows[2].textContent).toMatch("0");
                expect(rows[3].textContent).toMatch("0");
                expect(rows[4].textContent).toMatch("0 SEK");
            });

            test("should update values if alpacas are selected", async () => {
                const tables = await screen.findAllByRole("table");
                const summaryTable = tables[1];
                const rows = summaryTable.getElementsByTagName("td");

                const checkboxes = await screen.findAllByRole("checkbox");

                fireEvent.click(checkboxes[0]);
                fireEvent.click(checkboxes[1]);

                expect(rows[0].textContent).toMatch("1");
                expect(rows[1].textContent).toMatch("0");
                expect(rows[2].textContent).toMatch("0");
                expect(rows[3].textContent).toMatch("1");
                expect(rows[4].textContent).toMatch("496 SEK");
            });
        });
    });
});
