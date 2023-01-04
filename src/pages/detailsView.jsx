import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import BookingForm from "../components/bookingForm/BookingForm";
import sectionDatas from "../data/sectionData.json"

const DetailsView = () => {
    const { id } = useParams();
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        const x = sectionDatas.find(v => v.id == id)
        setSelected(x)
    }, [])

    const [toggleForm, setToggleForm] = useState("none")
    const bookDetailsFunction = () => {
        toggleForm == "none" ? setToggleForm("flex") : setToggleForm("none")
    }

    return (
        <div className="container-fluid faceSection_container mt-lg-5 pb-5" style={{ padding: "0px 0 32px 0" }}>

            {selected != null ? <div className="row d-flex flex-wrap mt-1" style={{ background: `aliceblue`, padding: "12px 8px", display: "flex", justifyContent: "center", minWidth: "240px" }}>
                <div className={`col col-12 col-md-10 col-lg-6 col-xl-5 p-2 order-1 order-md-1 order-lg-1 order-xl-1 my-2 mb-4 m-lg-0 m-xl-0`} style={{ border: "2px solid rgb(215, 4, 115)", background: "transparent" }}>
                    <span style={{ padding: "2px 8px", background: "rgb(215, 4, 115)", fontWeight: "500", color: "white" }}>{selected.title}</span>
                    <img src={`/${selected.image}`} style={{ width: "100%", aspectRaio: "1/1" }} alt={selected.title} />
                </div>

                <div className={`col col-12 col-md-10 col-lg-6 col-xl-5 order-2 order-md-2 order-lg-2 order-xl-2 d-flex`} style={{ background: "white" }}>
                    <div className="card_container" style={{ borderRadius: "2px 24px 2px 24px", height: "100%", backgroundColor: "transparent", padding: "12px 6px", display: "flex", width: "100%", flexDirection: "column", gap: "3px" }}>
                        <h4 style={{ width: "100%", minWidth: "100%", color: `rgb(215,4,115)`, letterSpacing: "1px", maxWidth: "max-content", padding: "2px 8px", alignSelf: `start`, fontSize: "170%", fontWeight: "600", borderRight: `none`, borderLeft: `2px solid rgb(215,4,115)` }}>
                            <span>{selected.title}</span>
                            <button className="btn btn-sm" style={{ float: "right", background: "rgb(215, 4, 115)", color: "white", letterSpacing: "1px", fontWeight: "600" }} onClick={() => bookDetailsFunction("")}>Book Now</button>

                        </h4>

                        <h6 style={{ width: "100%", textAlign: "left", padding: "2px 16px", background: `aliceblue`, fontWeight: "500", color: `rgb(215,4,115)`, borderRadius: "4px" }}>Ingredients</h6>
                        <ol type="1" className="ingredients " style={{ width: "100%", fontSize: "80%", color: "grey", padding: "2px 8px" }}>

                            {selected.ingredients.map((ingred, index1) => { return <li key={index1}>{ingred}</li> })}

                        </ol>

                        <h6 style={{ width: "100%", textAlign: "left", padding: "2px 16px", background: `aliceblue`, fontWeight: "500", color: `rgb(215,4,115)`, borderRadius: "4px" }}>Use</h6>
                        <ol type="1" style={{ fontSize: "80%", color: "grey", padding: "2px 8px" }}>
                            {selected.use.map((use, index2) => { return <li key={index2}>{use}</li> })}
                        </ol>

                        <div className="facialExtraDetails_container" style={{ width: "100%", padding: "3px 16px", display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "rgb(215, 4, 115)", fontSize: "120%", fontWeight: "600" }}>{selected.time.from}mins To {selected.time.to}mins</span>
                            <span style={{ color: "rgb(215, 4, 115)", fontSize: "120%", fontWeight: "600" }}>Charge Rs. {(selected.charge.normal + selected.charge.home_Service)}/-</span>
                        </div>

                    </div>
                </div>
            </div> :
                <h2>No Data Found !</h2>
            }

            <BookingForm toggleForm={toggleForm} bookingData={selected} setToggleForm={setToggleForm}/>

        </div>
    )
}

export default DetailsView