import './Overlay.scss';

export default function Overlay({children}) {
    return(
        <div className="content">
            {children}
        </div>
    )
}