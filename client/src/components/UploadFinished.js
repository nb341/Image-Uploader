import {useRef, useState, useEffect} from 'react';




export default function UploadFinised(){
    const copyLink = useRef(null);
    
    return (
    <div className="uploaded">
        <span id="checked" className="material-icons">check_circle</span>
        <p className="header-finised">Uploaded Successfully</p>
        <img alt="" src="http://localhost:5000/uploads/image-1615923144310petra-bouchalova-3BkznbMKp1I-unsplash.jpg.jpg" id="img-uploaded"/>
        <div id="copy-container">
            <input id="link-box" value="http://localhost:5000/uploads/image-1615923144310petra-bouchalova-3BkznbMKp1I-unsplash.jpg.jpg" type="text" /><button id="copy-link">Copy Link</button>
        </div>
    </div>
    );
}