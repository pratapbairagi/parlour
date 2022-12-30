

const SubNav = ({subNavToggleData}) =>{
    return(
            <ul className="subNav" style={{display:`${subNavToggleData}`}}>
                                <li>
                                    <img src="/eyebrow_logo.png" alt="" />
                                    <span> Eyebrow </span>
                                </li>
                                <li>
                                <img src="/face_beauty_logo.png" alt="" />
                                    <span> Face </span>
                                </li>
                                <li>
                                <img src="/hairCutting_logo.png" style={{height:"28px"}} alt="" />
                                   <span> Hair </span>
                                </li>
                                <li>
                                <img src="/nail_logo2.png" style={{height:"28px"}} alt="" />
                                   <span> Nail </span>
                                </li>
                            </ul>
    )
}

export default SubNav