
const About = () => {
    return (
        <div className="container-fluid pb-5">
            <h2 className="my-2 mx-auto" style={{width:"max-content", padding:"2px 8px", color:"red", fontWeight:"600"}}>About</h2>
            <div className="row d-flex flex-wrap justify-content-center">

                <div className="col col-12 col-md-10 col-lg-5 col-xl-4 p-1" style={{ aspectRatio: "1/.96", boxShadow: "0 0 2px grey" }}>
                    <img src="images/centerImage.jpeg
                    " style={{ width: "100%", height: "100%", borderRadius: "50%", border: "3px double pink" }} alt="" />
                </div>

                <div className="col col-12 col-md-10 col-lg-5 col-xl-4 p-3" style={{ background: "aliceblue", boxShadow: "0 0 2px grey", aspectRatio:"1/.9" }}>
                    <h6 className="m-auto" style={{ borderBottom: "2px solid pink", color: "red", width: "max-content", minWidth: "100px", textAlign: "center", fontSize: "120%", fontWeight: "600" }}>Services</h6>
                    <p className="mt-3" style={{ width: "100%", color: "green", fontSize: "90%", fontWeight: "500" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum eligendi aut, laborum nulla impedit ab, incidunt molestias nihil et nobis esse tempora temporibus vero facilis tenetur!</p>
                    <ol className="mt-2" style={{ width: "80%", color: "grey", fontWeight: "500", fontSize: "80%" }}>
                        <li> Lorem ipsum dolor sit amet consectetur.</li>
                        <li> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li> Lorem ipsum dolor sit. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                    </ol>
                    <h6 className="mt-4" style={{ color: "red", fontWeight: "500", borderLeft: "2px solid red", padding: "2px 8px" }}>Features</h6>
                    <ol className="mt-2" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        <li style={{ display: "flex", flexDirection: "row", gap: "4px", alignItems: "center", width: "max-content", padding: "3px 9px", border: "2px solid pink", borderRadius: "3px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="pink" className="bi bi-calendar-date" viewBox="0 0 16 16">
                                <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                            </svg>
                            <span style={{ fontSize: "70%", color: "pink", fontWeight: "600" }}>Book your day</span>
                        </li>

                        <li style={{ display: "flex", flexDirection: "row", gap: "4px", alignItems: "center", width: "max-content", padding: "3px 9px", border: "2px solid pink", borderRadius: "3px" }}>
                            <img src="images/ayurvedic-bowl-svgrepo-com.svg" style={{ width: "24px", height: "24px" }} alt="" />
                            <span style={{ fontSize: "70%", color: "pink", fontWeight: "600" }}>Herbal Products</span>
                        </li>

                        <li style={{ display: "flex", flexDirection: "row", gap: "4px", alignItems: "center", width: "max-content", padding: "3px 9px", border: "2px solid pink", borderRadius: "3px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="pink" className="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg>
                            <span style={{ fontSize: "70%", color: "pink", fontWeight: "600" }}>10 hrs service</span>
                        </li>

                        <li style={{ display: "flex", flexDirection: "row", gap: "4px", alignItems: "center", width: "max-content", padding: "3px 9px", border: "2px solid pink", borderRadius: "3px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="pink" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                            </svg>
                            <span style={{ fontSize: "70%", color: "pink", fontWeight: "600" }}>Minmum Charge</span>
                        </li>
                    </ol>
                </div>

                <div className="col col-12 col-md-10 col-lg-10 col-xl-10" style={{ background: "rgba(0,0,0, .2)", boxShadow: "0 0 2px grey", height: "100%" }}>
                    <h6 className="m-auto" style={{ borderBottom: "2px solid pink", color: "white", width: "max-content", minWidth: "100px", textAlign: "center", fontSize: "120%", fontWeight: "600" }}>History</h6>

                </div>

            </div>
        </div>
    )
}

export default About