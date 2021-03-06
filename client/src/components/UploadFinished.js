export default function UploadFinised(){
    return (
    <div className="uploaded">
        <span id="checked" class="material-icons">check_circle</span>
        <p className="header-finised">Uploaded Successfully</p>
        <div id="img-uploaded"></div>
        <div id="copy-container">
            <input id="link-box" type="text" /><button id="copy-link">Copy Link</button>
        </div>
    </div>
    );
}