import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <div className="container-fluid footer_container p-0" >
            <div className="row d-flex flex-wrap">

                <div className="col col-6 col-lg-3 col-md-6 col-8 px-2 py-1" >
                    <div className="footer-about">
                        <div className="footer-logo">
                            <Link style={{ display: "flex", justifyContebt: "center", alignItems: "center" }} >
                                <img src="/images/navLogo2.jpeg" style={{ width: "28px" }} alt="" />
                                <span style={{ fontWeight: "600", color: "rgb(215, 4, 115)" }}>HOME PARLOUR</span>
                            </Link>
                            <p className="px-2" style={{ color: "grey", fontWeight: "600" }}>The customer is at the heart of our unique business model, which include design.</p>

                        </div>
                    </div>
                </div>

                <div className="col col-lg-3 offset-lg-1 col-md-6 col-7">
                    <div className="footer-widget">
                        <div className="footer-newslatter mt-2">
                            <p style={{ color: "rgb(215, 4, 115)", fontWeight: "600", fontSize: "85%" }}>Be the first to know new benifits of using our services ! </p>
                            <form action="" className="mt-2">
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text btn btn-primary">
                                        <svg style={{transform:"rotateZ(45deg)"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                        </svg>
                                    </span>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col col-lg-2 offset-lg-1 col-m-3 col-6">
                    <div className="footer-widget" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                        <h6 className="mt-2" style={{ fontWeight: "600", color: "rgb(215, 4, 115)" }}>SEARCHING FOR</h6>
                        <ul className="p-0 mt-1" style={{ textAlign: "left", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", justifyItems: "start" }}>
                            <li >
                                <Link style={{ color: "grey", borderBottom: "1px solid grey" }}>Hair solutiio</Link>
                            </li>
                            <li>
                                <Link style={{ color: "grey", borderBottom: "1px solid grey" }}>Face Solution</Link>
                            </li>
                            <li>
                                <Link style={{ color: "grey", borderBottom: "1px solid grey" }}>Feet & Hand</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col col-lg-2 col-md-3 col-sm-6">
                    <div className="footer-widget" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                        <h6 className="mt-2" style={{ fontWeight: "600", color: "rgb(215, 4, 115)", width: "100%" }}>LINKS</h6>
                        <ul className="p-0 mt-1" style={{ textAlign: "left", width: "100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", justifyItems: "start" }}>
                            <li style={{ width: "90%", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid" }}>Contact Us</Link>
                            </li>
                            <li style={{ width: "90%", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid" }}>Payment Methods</Link>
                            </li>
                            <li style={{ width: "90%", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid" }}>Home Service</Link>
                            </li>
                            <li style={{ width: "90%", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid" }}>Effects</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col col-lg-8 col-md-10 col-12">
                    <div className="footer-widget" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                        <h6 className="mt-1" style={{ fontWeight: "600", color: "rgb(215, 4, 115)", width: "100%", }}>FOLLOW US ON</h6>
                        <ul className="p-0 py-3 mt-0" style={{ width: "100%", columnGap: "16px", rowGap: "10px", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "start" }}>
                            <li style={{ width: "max-content", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid", display: "flex", justifyContent: "center", padding: "3px 10px", alignItems: "center", columnGap: "6px", boxShadow: "0 0 0 2px ", color: "grey" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    <span>Facebook</span>
                                </Link>
                            </li>
                            <li style={{ width: "max-content", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid", display: "flex", justifyContent: "center", padding: "3px 10px", alignItems: "center", columnGap: "6px", boxShadow: "0 0 0 2px ", color: "grey" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                    <span>Instagram</span>
                                </Link>
                            </li>
                            <li style={{ width: "max-content", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid", display: "flex", justifyContent: "center", padding: "3px 10px", alignItems: "center", columnGap: "6px", boxShadow: "0 0 0 2px ", color: "grey" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                    <span>Linkedin</span>
                                </Link>
                            </li>
                            <li style={{ width: "max-content", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid", display: "flex", justifyContent: "center", padding: "3px 10px", alignItems: "center", columnGap: "6px", boxShadow: "0 0 0 2px ", color: "grey" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                    <span>Whatsapp</span>
                                </Link>
                            </li>
                            <li style={{ width: "max-content", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid", display: "flex", justifyContent: "center", padding: "3px 10px", alignItems: "center", columnGap: "6px", boxShadow: "0 0 0 2px ", color: "grey" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                    </svg>
                                    <span>Telegram</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>



            </div>

            <div className="row p-0" style={{ background: "black" }}>
                <div className="col col-lg-12 text-center">
                    <div className="footer-copyright-text" style={{ color: "grey", fontWeight: "600", fontSize: "90%", padding: "4px" }}>
                        <p>Copyright &copy; 2022 All rights reserved | This website is for female</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer