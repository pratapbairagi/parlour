import "./faceSection.css"

const FaceSection = ({id, data}) =>{
    return ( <div id={id} className="container-fluid faceSection_container" style={{padding:"8px 0 32px 0"}}>
            <h3 className="mt-5" style={{width:"100%", boxShadow:"0 0 2px grey", padding:"6px 16px", color:"pink", borderRadius:"4px 15px 4px 15px", fontWeight:"600", letterSpacing:"1px"}}>{data[0].category}</h3>
            { data.map((v,i)=>{
           return <div key={i} className="row d-flex flex-wrap mt-1" style={{background:`${i%2 === 0 ? "white" : "aliceblue"}`, padding:"12px 4px", display:"flex", justifyContent:"center"}}>
                <div className={`col col-12 col-md-10 col-lg-6 col-xl-5 p-2 order-1 order-md-1  ${i%2 === 0 ? "order-lg-2 order-xl-2" :"order-lg-1 order-xl-1"}`} style={{border:"2px solid pink"}}>
                        <img src={v.image} style={{width:"100%", aspectRaio:"1/1"}} alt="" />
                </div>

                <div className={`col col-12 col-md-10 col-lg-6 col-xl-5 order-2 order-md-2  ${i%2 === 0 ? "order-lg-1 order-xl-1" :"order-lg-2 order-xl-2"}`}>
                    <div className="card_container" style={{  borderRadius:"2px 24px 2px 24px", height:"100%", backgroundColor:"transparent", padding:"12px 6px", display:"flex", width:"100%", flexDirection:"column", gap:"3px"}}>
                        <h4 className="" style={{width:"max-content", color:`${i%2 === 0 ? "grey" : "teal" }`, letterSpacing:"1px", maxWidth:"max-content", padding:"2px 8px", alignSelf:`${i%2 === 0 ? "start" : "start"}`, fontSize:"170%", fontWeight:"600", borderRight:`${i%2 === 0 ? "none" : "none"}`, borderLeft:`${i%2 === 0 ? "2px solid red" : "2px solid red"}`}}>{v.title}</h4>
                       
                        <h6 style={{width:"100%", textAlign:"left", padding:"2px 16px", background:`${i%2 === 0 ? "aliceblue" : "white"}`, fontWeight:"500", color:`${i%2 === 0 ? "grey" : "grey"}`, borderRadius:"4px"}}>Ingredients</h6>
                        <ol type="1" className="ingredients " style={{ width:"100%", fontSize:"80%", color:"grey", padding:"2px 8px"}}>

                           {v.ingredients.map((ingred, index1)=>{ return <li key={index1}>{ingred}</li> })}
                        
                         </ol>

                        <h6 style={{width:"100%", textAlign:"left", padding:"2px 16px", background:`${i%2 === 0 ? "aliceblue" : "white"}`, fontWeight:"500", color:`${i%2 === 0 ? "grey" : "grey"}`, borderRadius:"4px"}}>Use</h6>
                        <ol type="1" style={{fontSize:"80%", color:"grey", padding:"2px 8px"}}>
                          { v.use.map((use, index2)=>{ return  <li key={index2}>{use}</li> }) }
                        </ol>

                        <div className="facialExtraDetails_container" style={{width:"100%", padding:"3px 16px", display:"flex", justifyContent:"space-between"}}>
                            <span style={{color:"teal", fontSize:"120%", fontWeight:"600"}}>{v.time.from}mins To {v.time.to}mins</span>
                            <span style={{color:"teal", fontSize:"120%", fontWeight:"600"}}>Charge Rs. {(v.charge.normal+v.charge.home_Service)}/-</span>
                        </div>

                    </div>
                </div>
            </div>
            })}

            {/* <div className="row d-flex flex-wrap mt-1" style={{background:"transparent", padding:"12px 4px", display:"flex", justifyContent:"center"}}>

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
            </div> */}
        </div>
    )
}

export default FaceSection