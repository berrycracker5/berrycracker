import MainWrapper from "./pages/components/MainWrapper";
import Sidebar from "./pages/Sidebar";

const App: React.FC = () => {
  return (
    <div className="App" id="wrapper">
      <MainWrapper />
      <Sidebar />
    </div>
  );
}

export default App;
