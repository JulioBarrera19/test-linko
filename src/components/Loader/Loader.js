import { Spinner, Overlay } from '../../components'
import { useSelector } from "react-redux";

export default function Loader() {
    const {loading} = useSelector(state => state.app);
    
    return (
        <div>
            {
                loading && (
                    <Overlay>
                        <Spinner />
                    </Overlay>
                )
            }
        </div>
    )
} 