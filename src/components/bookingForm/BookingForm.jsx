

const BookingForm = ({ toggleForm, setToggleForm }) => {

    const toggleFormFunction = () =>{
        toggleForm == "flex" && setToggleForm("none")
    }
    return (
        <div className="container-fluid-fluid" style={{ display: `${toggleForm}`, flexDirection: "column", padding: "0 32px", alignItems: "center", justifyContent: "center", height: "100vh", width: "100%", left: "0", top: "0", position: "fixed", zIndex: "3", background: "rgba(0,0,0, .2)"}}>
            <div className="btn-container" style={{width:"100%", display:"flex", justifyContent:"end", padding:"0", maxWidth:"700px"}}>
            <button onClick={()=> toggleFormFunction()} className="btn m-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
            </div>
            <div className="form-container row d-flex flex-wrap pt-3 pb-4 px-3 mx-auto" style={{ rowGap: "6px", width: "100%", boxShadow: " 0 0 0 2px gainsboro", borderRadius: "3px", background: "aliceblue", height: "max-content", maxWidth:"700px" }}>
                <h4 className="mb-2" style={{ width: "100%", textAlign: "center", color: "grey", fontWeight: "600", fontSize: "170%" }}>Booking Details</h4>
                <div className="col col-12 col-md-6 col-lg-6 col-xl-6 p-0">
                    <div className="input-group mx-auto" style={{ width: "98%", borderBottom: "1px solid grey" }} >
                        <div className="input-group-prepend" style={{ border: "none" }}>
                            <label className="input-group-text rounded-0" id="basic-addon1" style={{ background: "transparent", border: "none" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-person-fill-exclamation" viewBox="0 0 16 16">
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                                </svg>
                            </label>
                        </div>
                        <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" style={{ background: "transparent", border: "none" }} />
                    </div>
                </div>

                <div className="col col-12 col-md-6 col-lg-6 col-xl-6 p-0">
                    <div className="input-group mx-auto" style={{ width: "98%", borderBottom: "1px solid grey" }} >
                        <div className="input-group-prepend">
                            <label className="input-group-text rounded-0" id="basic-addon1" style={{ background: "transparent", border: "none" }} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </label>
                        </div>
                        <input type="number" className="form-control" placeholder="Phone Number " aria-label="Username" aria-describedby="basic-addon1" style={{ background: "transparent", border: "none" }} />
                    </div>
                </div>

                <div className="col col-12 col-md-6 col-lg-6 col-xl-6 p-0">
                    <div className="input-group mx-auto" style={{ width: "98%", borderBottom: "1px solid grey" }} >
                        <div className="input-group-prepend">
                            <label className="input-group-text rounded-0" id="basic-addon1" style={{ background: "transparent", border: "none" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                                </svg>
                            </label>
                        </div>
                        <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" style={{ background: "transparent", border: "none" }} />
                    </div>
                </div>

                <div className="col col-12 col-md-6 col-lg-6 col-xl-6 p-0">
                    <div className="input-group mx-auto" style={{ width: "98%", borderBottom: "1px solid grey" }} >
                        <div className="input-group-prepend">
                            <span className="input-group-text rounded-0" id="basic-addon1" style={{ background: "transparent", border: "none" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-house-exclamation-fill" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                                    <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 1 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                                </svg>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Full Address" aria-label="Username" aria-describedby="basic-addon1" style={{ background: "transparent", border: "none" }} />
                    </div>
                </div>

                <div className="col col-12 col-md-6 col-lg-6 col-xl-6 p-0">
                    <div className="input-group mx-auto" style={{ width: "98%", borderBottom: "1px solid grey" }} >
                        <div className="input-group-prepend">
                            <span className="input-group-text rounded-0" id="basic-addon1" style={{ background: "transparent", border: "none" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-calendar2-date-fill" viewBox="0 0 16 16">
                                    <path d="M9.402 10.246c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-4.118 9.79c1.258 0 2-1.067 2-2.872 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684c.047.64.594 1.406 1.703 1.406zm-2.89-5.435h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675V7.354z" />
                                </svg>
                            </span>
                        </div>
                        <input type="number" className="form-control" placeholder="age" aria-label="Username" aria-describedby="basic-addon1" style={{ background: "transparent", border: "none" }} />
                    </div>
                </div>

                <div className="col col-12 col-md-6 col-lg-6 col-xl-6 p-0">
                    <div className="input-group mx-auto" style={{ width: "98%", borderBottom: "1px solid grey" }}>
                        <div className="input-group-prepend">
                            <label htmlFor="" className="input-group-text rounded-0" style={{ background: "transparent", border: "none" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-calendar2-heart-fill" viewBox="0 0 16 16">
                                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5Zm-2 4v-1c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5Zm6 3.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                </svg>
                            </label>
                        </div>
                        <input className="form-control" type="date" name="" id="" style={{ background: "transparent", border: "none" }} />
                        <input className="form-control" type="time" name="" id="" style={{ background: "transparent", border: "none" }} />
                    </div>
                </div>
                <button className="btn mt-2 mx-auto" style={{ width: "99%", fontWeight: "600", letterSpacing: "1px", background: "white", color: "pink", fontSize: "130%" }}>Book</button>
            </div>

        </div>
    )
}

export default BookingForm