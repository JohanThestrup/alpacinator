import FormView from "./form";
import ListView from "./list";
import { Routes, Route, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App() {
    return (
        <Container>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate replace to="/listalpaca" />}
                />
                <Route path="/listalpaca" element={<ListView />} />
                <Route path="/addalpaca" element={<FormView />} />
            </Routes>
        </Container>
    );
}

export default App;
