import { MsgError, Overlay } from '../../components';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setErrorGral } from '../../store/errors.slice'

export default function DialogError() {
    const { errorGral, errorMsgGral, } = useSelector((state) => state.error);
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        showError();
        // eslint-disable-next-line 
    }, [errorGral]);

    const showError = () => {
        if(errorGral) {
            setShowAlert(true);

            setTimeout(() => {
                closeDialog();
            }, 3000);
        }
    }

    const closeDialog = () => {
        setShowAlert(false)
        dispatch(setErrorGral(false))
    }

    return(
        <div>
            {
                showAlert && (
                    <Overlay>
                        <MsgError msg={errorMsgGral} close={closeDialog} />
                    </Overlay>
                )
            }            
        </div>
    )
}