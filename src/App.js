import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App bg-red-200 h-screen w-screen mt-8">
      <BrowserRouter>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
