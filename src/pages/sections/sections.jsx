import FaceSection from "./faceSection"
import HairSection from "./hairSection"
import PedicureMenicure from "./pedicure_menicure"
import "./section.css"
import Threading from "./threading";
import sectionData from "../../data/sectionData.json";

const Sections = () =>{
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

           {faceData.length > 0 &&  <FaceSection id={"faceSection"} data={faceData}/> }
           {hairData.length > 0 &&  <FaceSection id={"hairSection"} data={hairData}/> }
           {threadingData.length > 0 &&  <FaceSection id={"threadingSection"} data={threadingData}/> }
           {pediManiData.length > 0 &&  <FaceSection id={"pediManiSection"} data={pediManiData}/> }

        </div>
    )
}

export default Sections