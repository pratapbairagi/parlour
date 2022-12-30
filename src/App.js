
import './App.css';
import Layout from './components/layout';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './pages/about/about';
import Contacts from './pages/contact/contact';
import Sections from './pages/sections/sections';
import PageNotFound from './pages/page_not_found';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      {/* <Layout/> */}
      <Routes>
      <Route exact path='/' element={<Layout/>} />
        {/* <Route path='/home' element={<Home/>} /> */}
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/section' element={<Sections/>} />
        <Route path='*' element={<PageNotFound/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
