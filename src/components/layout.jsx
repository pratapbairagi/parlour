import About from "../pages/about/about";
import Home from "../pages/home/home";
import Sections from "../pages/sections/sections";


const Layout = () =>{
    return(
        <>
            {/* <Header/> */}
            <Home/>
            <Sections/>
            <About/>
        </>
    )
}

export default Layout