import MainWrapper from "./components/MainWrapper";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="App" id="wrapper">
      <MainWrapper />
      <Sidebar />
    </div>
  );
}

export default App;
