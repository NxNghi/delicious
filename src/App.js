import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App bg-red-200 h-full w-screen">
      <BrowserRouter>
        <Header />
        <Search />
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
