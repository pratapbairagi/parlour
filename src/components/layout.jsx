import About from "../pages/about/about";
import Contacts from "../pages/contact/contact";
import Home from "../pages/home/home";
import Sections from "../pages/sections/sections";
import Testimonial from "../pages/textimonial/testimonial";


const Layout = ({search}) =>{
    return(
        <>
            {/* <Header/> */}
            <Home/>
            <Sections search={search}/>
            <About/>
            <Testimonial/>
            <Contacts/>
        </>
    )
}

export default Layout