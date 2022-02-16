import "./MsgError.scss";
import iconCancel from '../../assets/icon-cancel.svg'

export default function MsgError({msg, close}) {
    return(
        <div className="contentError">
            {close && <img className="buttonClose" alt='icon-cancel' src={iconCancel} onClick={close}></img>}
            {msg}
        </div>
    )
}