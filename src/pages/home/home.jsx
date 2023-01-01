

const Home = () => {
    return (
        <div className="container-fluid homeBannerContainer" style={{ position: "relative", height: "90vh" }}>

            <div className="row h-100 justify-content-end align-items-end align-items-md-center align-items-lg-center align-items-xl-center" >
                <div className="col col-12 col-md-6 col-lg-6 col-xl-6" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="/images/printed_girl.jpeg" style={{ height: "90%" }} alt="" />
                </div>
                <div className="col col-12 col-md-6 col-lg-6 col-xl-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
                    <h4 className="text home_heading" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "8px", width: "100%" }}>
                        <span style={{ fontWeight: "500", fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize: "140%", color: "rgb(203,4,115)", letterSpacing: "1px", whiteSpace: "nowrap" }}> WELCOME TO </span>
                        <span style={{ fontWeight: "500", fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize: "135%", color: "rgb(203,4,115)", letterSpacing: "1px", whiteSpace: "nowrap" }}> PARLOUR </span>
                    </h4>
                    <p className="bannerText mt-2" style={{ width: "100%", textAlign: "center", color: "grey" }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate omnis laborum eos ratione! Rerum cupiditate aperiam placeat temporibus nam quisquam? Quod earum numquam impedit veritatis dicta itaque. </p>
                    <div className="btnContainer mt-2 mb-2 px-2 py-1" style={{ width: "100%", display: "flex", justifyContent: "center", gap: "36px", marginTop: "16px" }}>
                        <button className="btn" style={{ borderRadius: "20px", border: "2px double white", fontWeight: "700", color: "white", background: "rgb(203,4,115)", padding: "4px 20px" }}>Contact</button>
                        <button className="btn" style={{ borderRadius: "20px", border: "2px double grey", fontWeight: "700", color: "grey", background: "white", padding: "4px 20px" }}>Explore</button>
                    </div>
                  
                </div>

            </div>



            <h2>Welcome</h2>
        </div>
    )
}

export default Home