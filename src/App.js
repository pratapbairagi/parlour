
import './App.css';
import Layout from './components/layout';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './pages/about/about';
import Contacts from './pages/contact/contact';
import Sections from './pages/sections/sections';
import PageNotFound from './pages/page_not_found/page_not_found';
import Header from './components/header/header';
import { useState } from 'react';
import DetailsView from './pages/details_view_card/detailsView';
import Footer from './components/footer/footer';
import Testimonial from './pages/textimonial/testimonial';


function App() {
  const [search, setSearch] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
      <Header searchData={setSearch}/>
      

      {/* <Layout/> */}
      <Routes>
      <Route exact path='/' element={<Layout search={search}/>} />
      <Route exact path='/view/:id' element={<DetailsView/>} />

        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/section' element={<Sections search={search}/>} />
        <Route path='*' element={<PageNotFound/>} />

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
