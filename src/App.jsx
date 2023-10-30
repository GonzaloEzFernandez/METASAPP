import Layout from "./components/shared/Layout";
import { Route, Routes } from "react-router-dom";
import GoalForm from "./components/goalCreate.jsx/GoalForm";
import GoalElement from "./components/goalList.jsx/List";
import NoEncontrado from "./components/shared/NoEncontrado";
import Modal from "./components/shared/Modal";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GoalElement />} />
        <Route path="/lista" element={<GoalElement />}>
          <Route
            path="/lista/:id"
            element={
              <Modal>
                <GoalForm />
              </Modal>
            }
          />
        </Route>
        <Route path="/crear" element={<GoalForm />} />
      </Route>
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}

export default App;
