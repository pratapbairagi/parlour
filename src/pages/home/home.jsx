

const Home = () => {
    return (
        <div className="container-fluid homeBannerContainer mt-0 mt-sm-0 mt-md-2 mt-lg-3 mt-xl-4 py-1 py-sm-1 py-md-2 py-lg-4 py-xl-6" style={{backgroundImage:"url('images/parlour_background.jpeg')", backgroundRepeat:"no-repeat",  backgroundPosition:"top", backgroundSize:"cover", position:"relative"}}>
            <div className="row" style={{background:"rgba(0,0,0, .3)", padding:"24px 0", display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 d-flex flex-wrap gap-1">
                    <div style={{ display: "flex", flexWrap: "wrap", borderLeft: "3px solid whitesmoke", padding:"0", height:"max-content" }}>
                        <svg style={{fontWeight:"700",color:"red", fontSize:"130%"}} xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" className="bi bi-house-heart-fill" viewBox="0 0 16 16">
                            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
                            <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
                        </svg>
                        <div className="head_two w-100" style={{ fontWeight: "700", fontSize: "200%", padding: "0", color: "#13b5db", paddingLeft: "6px",zIndex:"1", position:"relative", fontFamily:"Dosis", fontWeight:"700" }}>
                            <span style={{color:"red"}}> Herbal </span> 
                            <span style={{color:"black", fontWeight:"700"}}> Parlour </span>
                        </div>
                    </div>
                    <div className="text w-100" style={{ borderLeft: "3px solid whitesmoke", fontWeight: "500", fontSize: "80%", color: "white", paddingLeft: "9px", maxWidth:"70%" }}>We do serve 100% pure herbal products for facial and face pacs etc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci dolor.</div>
                    <div className="btnContainer mt-3 px-2 py-1" style={{width:"100%", display:"flex", justifyContent:"start", gap:"36px", marginTop:"16px"}}>
                        <button className="btn " style={{border:"2px double grey", borderRadius:"20px", fontWeight:"700", color:"grey", background:"white", padding:"2px 24px"}}>Contact</button>
                        <button className="btn" style={{border:"2px double white", borderRadius:"20px", fontWeight:"700", color:"white", background:"transparent", padding:"2px 24px"}}>Explore</button>
                    </div>
                
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex" style={{ display:"flex", alignItems:"center", justifyContent:"start", position:"relative", minHeight:"100%"}}>
                    <span style={{position:"absolute", width:"13%", aspectRatio:"1/1", border:"2px solid white", borderRadius:"50%"}}></span>
                    <span style={{position:"absolute", width:"23%", top:"-19%", right:"-3%", aspectRatio:"1/1", border:"2px solid white",borderTop:"transparent", borderRight:"transparent", borderRadius:"50%"}}></span>
                    <span style={{position:"absolute", width:"4%", top:"7%", right:"29%", aspectRatio:"1/1", border:"1px solid white", borderRadius:"50%"}}></span>
                    <span style={{position:"absolute", width:"10%", bottom:"10%", right:"4%", aspectRatio:"1/1", border:"2px solid white", borderLeft:"transparent", borderRadius:"50%"}}></span>
                    <span style={{position:"absolute", width:"7%", bottom:"-10%", right:"74%", aspectRatio:"1/1", border:"2px solid white", borderRadius:"50%"}}></span>
                    <span style={{position:"absolute", width:"17%", bottom:"-30%", right:"34%", aspectRatio:"1/1", border:"2px solid white", borderRadius:"50%"}}></span>
                    <span style={{position:"absolute", width:"5%", bottom:"0%", right:"104%", aspectRatio:"1/1", border:"1px solid white", borderTop:"none", borderRight:"none", borderRadius:"50%"}}></span>
                    <span style={{position:"absolute", width:"9%", bottom:"36%", right:"38%", aspectRatio:"1/1", border:"2px solid white", borderLeft:"transparent", borderRadius:"50%"}}></span>
                    <span style={{position:"absolute", width:"7%", top:"-2%", right:"64%", aspectRatio:"1/1", border:"2px solid white", borderLeft:"none", borderRadius:"50%"}}></span>
                    <span style={{position:"absolute", width:"4%", top:"34%", right:"64%", aspectRatio:"1/1", border:"1px solid white", borderLeft:"none", borderRadius:"50%"}}></span>
                    <span style={{position:"absolute", width:"4%", bottom:"-10%", right:"-3%", aspectRatio:"1/1", border:"1px solid white", borderTop:"none", borderRadius:"50%"}}></span>

                
              
                </div>
            </div>
            <h2>Welcome</h2>
        </div>
    )
}

export default Home