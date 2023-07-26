import './App.css';
import Body from './components/Body/Body';
import Sidebar from './components/Bar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import UrlProvider from './providers/UrlProvider';

function App() {
  return (
    // {/* sidebarの中でLinkを使いたいので */}
    <BrowserRouter>
      <UrlProvider>
        <div className='container'>
          <Sidebar></Sidebar>
          
          <Body></Body>
          
        </div>
      </UrlProvider>
    </BrowserRouter>
  )
}

export default App;
