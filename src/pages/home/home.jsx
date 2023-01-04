import { Link } from "react-router-dom"
import "./home.css"

const Home = () => {
    // const data = fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    // const data = fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=2",
//     const data = fetch("https://countries-cities.p.rapidapi.com/location/city/5128580",


//    {
//     method: 'GET',
//     headers:{
//         'X-RapidAPI-Key': '270271f68amshec74ff6f0d3198ep1b5470jsn0932fe90868a',
// 		'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com',
//     }
//    }
//     ).then(response => response.json()).then( data=> console.log(data))



    return (
        <div className="container-fluid homeBannerContainer" style={{  }}>

            <div className="row h-100 justify-content-end align-items-end align-items-md-center align-items-lg-center align-items-xl-center" >
                <div className="col col-12 col-md-6 col-lg-6 col-xl-6" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="/images/printed_girl.jpeg" style={{ height: "90%" }} alt="" />
                </div>
                <div className="col col-12 col-md-6 col-lg-6 col-xl-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
                    <h4 className="text home_heading" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "8px", width: "95%" }}>
                        <span style={{ fontWeight: "700", fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize: "140%", color: "white", letterSpacing: "1px", whiteSpace: "nowrap" }}> WELCOME TO </span>
                        <span style={{ fontWeight: "700", fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize: "135%", color: "black", letterSpacing: "1px", whiteSpace: "nowrap" }}> PARLOUR </span>
                    </h4>
                    <p className="bannerText mt-1" style={{ width: "90%", textAlign: "center", color: "whitesmoke"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate omnis laborum eos ratione! Rerum cupiditate aperiam placeat temporibus nam quisquam? Quod earum numquam impedit veritatis dicta itaque. </p>
                    <div className="btnContainer mt-1 mb-2 px-2 py-1" style={{ width: "100%", display: "flex", justifyContent: "center", gap: "36px", marginTop: "16px" }}>
                        <Link to="/contact" className="btn" style={{ borderRadius: "20px", border: "2px double white", fontWeight: "700", color: "white", background: "rgb(203,4,115)", padding: "4px 20px" }}>Contact</Link>
                        <button className="btn" style={{ borderRadius: "20px", border: "2px double grey", fontWeight: "700", color: "grey", background: "white", padding: "4px 20px" }}>Explore</button>
                    </div>
                  
                </div>

            </div>



            <h2>Welcome</h2>
        </div>
    )
}

export default Home