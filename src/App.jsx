import GoalElement from "./components/goalList.jsx/GoalElement";
import Footer from "./components/shared/Footer";
import Head from "./components/shared/Head";
import MainPart from "./components/shared/MainPart";
import List from "./components/goalList.jsx/List";
import GoalForm from "./components/goalCreate.jsx/GoalForm";

function App() {
  return (
    <div>
      <Head />
      <MainPart>
        {/* <List /> */}
        {<GoalForm />}
      </MainPart>
      <Footer />
    </div>
  );
}

export default App;
