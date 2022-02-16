import './Chip.scss';

export default function Chip({text}) {
    return (
        <span className={`chip ${text.split("'")[0] === 'men' || text.split("'")[0] === 'women' ? text.split("'")[0]  : 'gray'}` } >{text}</span>
    )
}