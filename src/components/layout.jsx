import About from "../pages/about/about";
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
        </>
    )
}

export default Layout