import "./contact.css"
import FilledUnformation from "./filledInformation_card"

const Contacts = () => {
    return (
        <div className="container-fluid contact-container">
            <h2 className="">Contact</h2>
            <div className="row-container">

                

                <form className="contact-form ">
                    <FilledUnformation/>
                    <div className="row">
                        <span className="contact-header">
                            <h5>Send a message</h5>
                        </span>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label htmlFor="">First Name</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label htmlFor="">Last Name</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label htmlFor="">E-Mail</label>
                            <input type="mail" name="" id="" />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <label htmlFor="">Mobile Number</label>
                            <input type="tel" name="" id="" />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label htmlFor="">First Name</label>
                            <textarea type="text" name="" id="" />
                        </div>

                        <span className="mt-2">
                            <button className="" style={{ padding: "5px 24px", fontSize: "80%", border: "none", background: "rgb(215, 4, 115)", color: "white", fontWeight: "600", letterSpacing: "1px" }}>SEND</button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts