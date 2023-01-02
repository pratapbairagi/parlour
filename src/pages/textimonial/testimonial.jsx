import TestiminialCard from "../../components/testiminialCard";
import "./testimonial.css";

const Testimonial = () => {
    return (
        <div id="testimonial" className="container-fluid" style={{overflow:"hidden"}}>
            <h2 style={{padding:"0 8px", textAlign:"center", color:"rgb(215,4,115)", fontWeight:"600"}}>Testimonial</h2>
        <div className="container-fluid testimonial-container">
            <div className="row ">
                <TestiminialCard/>
                <TestiminialCard/>
                <TestiminialCard/>
                <TestiminialCard/>
            </div>
        </div>
        </div>
    )
}

export default Testimonial