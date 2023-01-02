

const TestiminialCard = () => {
    return (
            <div className="col col-11 col-md-8 col-lg-6 col-xl-4">
                <div className="testimonial-card">

                    <div className="review-person-details">
                        <h5 className="name">
                            <span>FIRST</span>
                            <span>LAST</span>
                        </h5>
                        <h6 className="reviewer">Customer</h6>

                        <div className="stars">
                            <img src="/images/fillStar.svg" style={{ width: "16px", height: "16px" }} alt="" />
                            <img src="/images/fillStar.svg" style={{ width: "16px", height: "16px" }} alt="" />
                            <img src="/images/fillStar.svg" style={{ width: "16px", height: "16px" }} alt="" />
                            <img src="/images/fillStar.svg" style={{ width: "16px", height: "16px" }} alt="" />
                            <img src="/images/halfFillStar.svg" style={{ width: "16px", height: "16px" }} alt="" />
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