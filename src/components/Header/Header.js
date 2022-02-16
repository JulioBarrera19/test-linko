import { Loader, DialogError } from '../../components'
import './Header.scss';
import logo from '../../assets/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const location = useLocation().pathname
    const navigate = useNavigate();

    const goHome = () =>{
        navigate('/')
    }

    return (
        <div>
            <header className="contentHeader">
                {location !== '/' && (
                    <span className="buttonBack" onClick={goHome}>
                        &laquo;
                    </span>
                )}
                <img alt='logo' src={logo} onClick={goHome}></img>
            </header>
            <Loader />
            <DialogError />
        </div>
    );
}