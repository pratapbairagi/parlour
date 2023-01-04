import FaceSection from "./faceSection"
import "./section.css"
import sectionData from "../../data/sectionData.json";
// import { useContext } from "react";
// import { AppContext, AppProvider } from "../../context/appProvider";

const Sections = ({search}) =>{

    // const dataFromContext = useContext(AppContext)

    let uniqueCategory = [ ...new Set(sectionData.map(v=>v.category)) ]

    return(
        <div className="container-fluid p-0">
        <div className="container-fluid sectionContainer d-flex flex-column mt-lg-0 mt-xl-0">
            <h3>Category</h3>
            <div className="d-flex sectionContainerInner justify-content-lg-center justify-content-xl-center mt-2">
                <a href="#Face" className="setctionContents">
                    <img src="/images/facial_image_logo.jpeg" alt="" />
                <span>face</span>
                </a>

                <a href="#Threading" className="setctionContents">
                <img src="/images/eyebrow_image.jpeg" alt="" />
                <span>Threading</span>
                </a>

                <a href="#Pedicure & Manicure" className="setctionContents">
                <img src="/images/nailBrush_image.jpeg" alt="" />
                <span>Pedicure & Manicure</span>
                </a>

                <a href="#Hair" className="setctionContents">
                <img src="/images/hairCut.jpeg"  alt="" />
                <span>Hair</span>
                </a>

            </div>
            

        </div>
        
            {/* {search.length > 0 &&  <FaceSection id={"searched"} data={search}/> } */}
            
           {search.length <= 0  && uniqueCategory.map((v,i)=>{
                return <FaceSection id={v} key={i} index={i} data={sectionData.filter((vv, ii)=> vv.category == v)} />
           })}

        </div>
    )
}

export default Sections