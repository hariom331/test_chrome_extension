import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
const handleClickCheck = () => {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(() => {
            console.log("Permission Granted")
            const url = window.location.href;
            document.getElementById("spinball").style.display="none";
            document.getElementById("box").style.display="none";
            document.getElementById("procced_button").style.display="block";
        })
        .catch((err) => {
            console.log("permission Denied")
            console.log(err);
        });
}

function Check() {
    useEffect(() => {
        setTimeout(()=> {
            handleClickCheck();
        }, 1);
      });
    return (
        <>
            <button className="btn btn-primary" id="box" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" id="spinball" aria-hidden="true" ></span>
                <span className="sr-only" id="text">Waiting For Permission...</span>
            </button>
            <Link to ="/check/starttest" id="procced_button" style={{display: "none"}}> <button type="button" className="btn btn-primary" >Procced</button>
</Link>
        </>
    )
}

export default Check;
