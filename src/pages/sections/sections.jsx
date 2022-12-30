import FaceSection from "./faceSection"
import "./section.css"
import sectionData from "../../data/sectionData.json";
// import { useContext } from "react";
// import { AppContext, AppProvider } from "../../context/appProvider";

const Sections = ({search}) =>{

    // const dataFromContext = useContext(AppContext)


    const hairData = sectionData.filter(v=>v.category == "Hair");
    const faceData = sectionData.filter(v=>v.category == "Face");
    const threadingData = sectionData.filter(v=>v.category == "Threading");
    const pediManiData = sectionData.filter(v=>v.category == "Pedicure & Manicure");


    return(
        <div className="container-fluid p-0">
        <div className="container-fluid sectionContainer d-flex flex-column">
            <h3>Category</h3>
            <div className="d-flex sectionContainerInner justify-content-lg-center justify-content-xl-center">
                <a href="#faceSection" className="setctionContents">
                    <img src="images/facial_image_logo.jpeg" alt="" />
                <span>face</span>
                </a>

                <a href="#threadingSection" className="setctionContents">
                <img src="images/eyebrow_image.jpeg" alt="" />
                <span>Threading</span>
                </a>

                <a href="#pediManiSection" className="setctionContents">
                <img src="images/nailBrush_image.jpeg" alt="" />
                <span>Pedicure & Manicure</span>
                </a>

                <a href="#hairSection" className="setctionContents">
                <img src="images/hairCut.jpeg"  alt="" />
                <span>Hair</span>
                </a>

            </div>
            

        </div>
        
            {search.length > 0 &&  <FaceSection id={"searched"} data={search}/> }
            
           {search.length <= 0 && faceData.length > 0 &&  <FaceSection id={"faceSection"} data={faceData}/> }
           {search.length <= 0 && hairData.length > 0 &&  <FaceSection id={"hairSection"} data={hairData}/> }
           {search.length <= 0 && threadingData.length > 0 &&  <FaceSection id={"threadingSection"} data={threadingData}/> }
           {search.length <= 0 && pediManiData.length > 0 &&  <FaceSection id={"pediManiSection"} data={pediManiData}/> }

        </div>
    )
}

export default Sections