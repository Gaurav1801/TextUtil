// import React, { useState } from 'react'

export default function About(props) {
    // function dark() {
    //     if (mystyle.color === "white") {
    //         setmystyle({
    //             color: "black",
    //             backgroundColor: "white",
    //             padding: "5px"
    //         })
    //         setbtn("Dark Mode")
    //     } else {
    //         setmystyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             padding: "5px"
    //         })
    //         setbtn("light mode")
    //     }
    // }
    // const [mystyle, setmystyle] = useState({
    //     color: "white",
    //     backgroundColor: "black",
    //     padding: "5px"
    // });
    // const [btn,setbtn]=useState(" Dark Mode")
    const mystyle ={
        color: props.mode === "light" ? "black":"white",
        backgroundColor: props.mode === "light" ? "white":"black"
    }
    return (
        <div className="container mt-5 p-3" style={mystyle}>
            {document.title="TextUtils - About"}
            <h1>About</h1>
            <div className=' container'>
                <div className="accordion" id="accordionExample"  >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container mt-3">
                <btton className="btn btn-primary" onClick={dark}>{btn}</btton>
            </div> */}
        </div>
    )
}
