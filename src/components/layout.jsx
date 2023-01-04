import About from "../pages/about/about";
import Contacts from "../pages/contact/contact";
import Home from "../pages/home/home";
import Sections from "../pages/sections/sections";
import Testimonial from "../pages/textimonial/testimonial";
import reviewDatas from "../data/sectionData.json"
import { useState } from "react";
import { useEffect } from "react";


const Layout = ({search}) =>{
    
    let [data, setData] = useState([])

    useEffect(()=>{
        if(reviewDatas.length > 0){
            setData(reviewDatas.flatMap(v=>v.reviews))
        }
    },[reviewDatas])

    return(
        <>
            <Home/>
            <Sections search={search}/>
            <About/>
            {data.length > 0 && <Testimonial data={data}/> }
            <Contacts/>
        </>
    )
}

export default Layout