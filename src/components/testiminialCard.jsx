

const TestiminialCard = () => {
    return (
            <div className="col col-11 col-md-8 col-lg-6 col-xl-4" style={{display:"flex", alignItems:"end"}}>
                
                <img src="/images/review-girl1.jpg" className="review-person-image" alt="" />

                <div className="testimonial-card">

                    <div className="review-person-details">
                        <h5 className="name">
                            <p>FIRST</p>
                            <p>LAST</p>
                        </h5>
                        <h6 className="reviewer">Customer</h6>

                        <div className="stars">
                            <img src="/images/fillStar.svg" style={{ width: "12px", height: "12px" }} alt="" />
                            <img src="/images/fillStar.svg" style={{ width: "12px", height: "12px" }} alt="" />
                            <img src="/images/fillStar.svg" style={{ width: "12px", height: "12px" }} alt="" />
                            <img src="/images/fillStar.svg" style={{ width: "12px", height: "12px" }} alt="" />
                            <img src="/images/halfFillStar.svg" style={{ width: "12px", height: "12px" }} alt="" />
                        </div>

                    </div>

                    <div className="review-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam modi repellat esse consequuntur vel sit corrupti mollitia quaerat saepe alias dolorum, ducimus necessitatibus. Officiis.</p>
                    </div>
                </div>
            </div>
    )
}

export default TestiminialCard