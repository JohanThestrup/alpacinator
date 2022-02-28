import App from "../App";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("FormView", () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/addalpaca"]}>
                <App />
            </MemoryRouter>
        );
    });

    describe("Layout", () => {
        test("should render an input with label: Alpaca name", () => {
            const nameInput = screen.getByLabelText("Alpaca name");
            expect(nameInput).toBeInTheDocument();
            expect(nameInput instanceof HTMLInputElement).toBe(true);
        });
        test("should render an input with label: Weight", () => {
            const weightInput = screen.getByLabelText("Weight");
            expect(weightInput).toBeInTheDocument();
            expect(weightInput instanceof HTMLInputElement).toBe(true);
        });
        test("should render an input with label: Color picker", () => {
            const colorInput = screen.getByLabelText("Color picker");
            expect(colorInput).toBeInTheDocument();
            expect(colorInput instanceof HTMLInputElement).toBe(true);
        });
        test("should render an input with label: Alpaca farm", () => {
            const farmInput = screen.getByLabelText("Alpaca farm");
            expect(farmInput).toBeInTheDocument();
            expect(farmInput instanceof HTMLSelectElement).toBe(true);
        });
        test("should render a save button", () => {
            const saveButton = screen.getByText("Save");
            expect(saveButton).toBeInTheDocument();
            expect(saveButton instanceof HTMLButtonElement).toBe(true);
        });
    });

    describe("Behaviour", () => {
        test("should display error messages for required fields", async () => {
            const saveButton = screen.getByText("Save");

            const invalidFeedback = screen.getAllByRole("invalidFeedback");

            userEvent.click(saveButton);

            await waitFor(() => {
                expect(invalidFeedback[0].textContent).toBe("Required");
                expect(invalidFeedback[1].textContent).toBe("Required");
            });
        });
        test("should display an error message when negative value is entered in the weight input field", async () => {
            const weightInput = screen.getByLabelText("Weight");
            const invalidFeedback = screen.getAllByRole("invalidFeedback");

            fireEvent.change(weightInput, { target: { value: "-1" } });

            await waitFor(() => {
                expect(invalidFeedback[1].textContent).toBe(
                    "weight must be greater than 0"
                );
            });
        });
    });
});
