import "./faceSection.css"

const FaceSection = ({id}) =>{
    return (
        <div id={id} className="container-fluid faceSection_container" style={{padding:"8px 0 32px 0"}}>
            <h3 className="mt-5" style={{width:"100%", boxShadow:"0 0 2px grey", padding:"6px 16px", color:"pink", borderRadius:"4px 15px 4px 15px", fontWeight:"600", letterSpacing:"1px"}}>Face</h3>
            
            <div className="row d-flex flex-wrap mt-1" style={{background:"whitesmoke", padding:"12px 4px", display:"flex", justifyContent:"center"}}>
                <div className="col col-12 col-md-10 col-lg-6 col-xl-5 p-2" style={{border:"2px solid pink"}}>
                        <img src="images/face_pack.png" style={{width:"100%", aspectRaio:"1/1"}} alt="" />
                </div>

                <div className="col col-12 col-md-10 col-lg-6 col-xl-5">
                    <div className="card_container" style={{  borderRadius:"2px 24px 2px 24px", height:"100%", backgroundColor:"transparent", padding:"12px 6px", display:"flex", width:"100%", flexDirection:"column", gap:"3px"}}>
                        <h4 className="" style={{width:"max-content", color:"white", letterSpacing:"1px", maxWidth:"max-content", padding:"2px 8px", alignSelf:"end", fontSize:"170%", fontWeight:"600", borderRight:"2px solid red"}}>Face Pack</h4>
                       
                        <h6 style={{width:"100%", textAlign:"left", padding:"2px 16px", background:"white", fontWeight:"500", color:"grey", borderRadius:"4px"}}>Ingredients</h6>
                        <ol type="1" className="ingredients " style={{ width:"100%", fontSize:"80%", color:"grey", padding:"2px 8px"}}>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur sunt facere nesciunt obcaecati?</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione! Repudiandae explicabo repellendus saepe vero nam dolore quia maxime?</li>
                        </ol>

                        <h6 style={{width:"100%", textAlign:"left", padding:"2px 16px", background:"white", fontWeight:"500", color:"grey", borderRadius:"4px"}}>Use</h6>
                        <ol type="1" style={{fontSize:"80%", color:"grey", padding:"2px 8px"}}>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                        </ol>

                        <div className="facialExtraDetails_container" style={{width:"100%", padding:"3px 16px", display:"flex", justifyContent:"space-between"}}>
                            <span style={{color:"teal", fontSize:"120%", fontWeight:"600"}}>30mins To 60mins</span>
                            <span style={{color:"teal", fontSize:"120%", fontWeight:"600"}}>Charge Rs. 599/-</span>
                        </div>

                        
                    </div>
                </div>
            </div>

            <div className="row d-flex flex-wrap mt-1" style={{background:"transparent", padding:"12px 4px", display:"flex", justifyContent:"center"}}>

                <div className="col col-12 col-md-10 col-lg-6 col-xl-5">
                    <div className="card_container"style={{  borderRadius:"2px 24px 2px 24px", height:"100%", backgroundColor:"transparent", padding:"12px 6px", display:"flex", flexDirection:"column", gap:"3px"}}>
                        <h4 className="" style={{width:"max-content", color:"grey", letterSpacing:"1px", maxWidth:"max-content", padding:"2px 8px", float:"left", fontSize:"170%", fontWeight:"600", borderLeft:"2px solid red"}}>Facial</h4>
                        <h6 style={{width:"100%", textAlign:"left", padding:"2px 16px", background:"whitesmoke", fontWeight:"500", color:"grey", borderRadius:"4px"}}>Ingredients</h6>
                        <ol type="1" className="ingredients" style={{ width:"100%",padding:"2px 8px", fontSize:"80%", color:"grey"}}>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur sunt facere nesciunt obcaecati?</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione! Repudiandae explicabo repellendus saepe vero nam dolore quia maxime?</li>
                        </ol>

                        <h6 style={{width:"100%", textAlign:"left", padding:"2px 16px", background:"whitesmoke", fontWeight:"500", color:"grey", borderRadius:"4px"}}>Use</h6>
                        <ol type="1" style={{fontSize:"80%", color:"grey",padding:"2px 8px"}}>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                        </ol>

                        <div className="facialExtraDetails_container" style={{width:"100%", padding:"3px 16px", display:"flex", justifyContent:"space-between"}}>
                            <span style={{color:"teal", fontSize:"120%", fontWeight:"600"}}>30mins To 60mins</span>
                            <span style={{color:"teal", fontSize:"120%", fontWeight:"600"}}>Charge Rs. 599/-</span>
                        </div>

                    </div>
                </div>

                <div className="col col-12 col-md-10 col-lg-6 col-xl-5 p-2" style={{border:"2px solid pink"}}>
                        <img src="images/facial.jpeg" style={{width:"100%", aspectRaio:"1/1"}} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FaceSection