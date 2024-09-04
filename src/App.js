import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import { BrowserRouter, Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App bg-red-200 h-full w-screen">
      <BrowserRouter>
        <div>
          <div className='flex '>
            <Link to={"/"}>
              <GiKnifeFork />
              <h3>Delicious</h3>
            </Link>
          </div>
        </div>
        <Search />
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
