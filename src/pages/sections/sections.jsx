import FaceSection from "./faceSection"
import HairSection from "./hairSection"
import PedicureMenicure from "./pedicure_menicure"
import "./section.css"
import Threading from "./threading"

const Sections = () =>{
    return(
        <div className="container-fluid p-0">
        <div className="container-fluid sectionContainer d-flex flex-column">
            <h3>Category</h3>
            <div className="d-flex sectionContainerInner justify-content-lg-center justify-content-xl-center">
                <a href="#faceSection" className="setctionContents">
                    <img src="images/facial_image.png" alt="" />
                <span>face</span>
                </a>

                <a href="#threadingSection" className="setctionContents">
                <img src="images/eyebrow_image.png" alt="" />
                <span>Threading</span>
                </a>

                <a href="#pediManiSection" className="setctionContents">
                <img src="images/nailBrush_image.png" alt="" />
                <span>Pedicure & Manicure</span>
                </a>

                <a href="#hairSection" className="setctionContents">
                <img src="images/hairCut.png"  alt="" />
                <span>Hair</span>
                </a>

            </div>
            

        </div>

            <HairSection id={"hairSection"}/>
            <PedicureMenicure id={"pediManiSection"}/>
            <FaceSection id={"faceSection"}/>
            <Threading id={"threadingSection"}/>

        </div>
    )
}

export default Sections