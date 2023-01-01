

const Home = () => {
    return (
        <div className="container-fluid homeBannerContainer" style={{ position: "relative", height: "90vh" }}>

            <div className="row h-100 justify-content-end align-items-end align-items-md-center align-items-lg-center align-items-xl-center" >
                <div className="col col-12 col-md-6 col-lg-6 col-xl-6" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="/images/printed_girl.png" style={{ height: "90%" }} alt="" />
                </div>
                <div className="col col-12 col-md-6 col-lg-6 col-xl-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
                    <h4 className="text home_heading" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "8px", width: "100%" }}>
                        <span style={{ fontWeight: "500", fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize: "140%", color: "rgb(203,4,115)", letterSpacing: "1px", whiteSpace: "nowrap" }}> WELCOME TO </span>
                        <span style={{ fontWeight: "500", fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize: "135%", color: "rgb(203,4,115)", letterSpacing: "1px", whiteSpace: "nowrap" }}> PARLOUR </span>
                    </h4>
                    <p className="bannerText mt-2" style={{ width: "100%", textAlign: "center", color: "grey" }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate omnis laborum eos ratione! Rerum cupiditate aperiam placeat temporibus nam quisquam? Quod earum numquam impedit veritatis dicta itaque. </p>
                    <div className="btnContainer mt-4 mb-2 px-2 py-1" style={{ width: "100%", display: "flex", justifyContent: "center", gap: "36px", marginTop: "16px" }}>
                        <button className="btn" style={{ borderRadius: "20px", border: "2px double white", fontWeight: "700", color: "white", background: "rgb(203,4,115)", padding: "4px 20px" }}>Contact</button>
                        <button className="btn" style={{ borderRadius: "20px", border: "2px double grey", fontWeight: "700", color: "grey", background: "white", padding: "4px 20px" }}>Explore</button>
                    </div>
                    {/* <svg style={{ position: "absolute", bottom: "0", right: "0", width: "100%\\px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgb(203,4,115)" fillOpacity="1" d="M0,320L120,304C240,288,480,256,720,213.3C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg> */}
                </div>

            </div>



            <h2>Welcome</h2>
        </div>
    )
}

export default Home