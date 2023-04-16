import MainWrapper from './pages/components/MainWrapper';
import Sidebar from './pages/Sidebar';

const App = () => {
  return (
    <div className="App">
      <div id="wrapper">
        <MainWrapper />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
