import Pages from './pages/Pages';
import Category from './components/category';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App bg-red-200 h-screen w-screen">
      <BrowserRouter>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
