
import {useState} from 'react';


export default function UploadFinised(props){

    const [btnTxt, setBtnTxt] = useState('Copy Link')

    return (
    <div className="uploaded">
        <span id="checked" className="material-icons">check_circle</span>
        <p className="header-finised">Uploaded Successfully</p>
        <img alt="" src={props.imgUrl} id="img-uploaded"/>
        <div id="copy-container">
            <input id="link-box" readOnly value={props.imgUrl} type="text" />
            <button 
            onClick={(e) => {
                navigator.clipboard.writeText(props.imgUrl);  
                e.target.focus();
                setBtnTxt('Copied');
            
            }} 
            
            id="copy-link">{btnTxt}</button>
        </div>
    </div>
    );
}