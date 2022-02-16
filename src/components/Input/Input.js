import "./Input.scss";

export default function Input({ id, name, type, min, max, value, changeCart }) {
    const onChange = (e) =>{
        changeCart(e.target.value)
    }

  return (
    <input
      className="inputStyle"
      id={id}
      type={type}
      name={name}
      min={min}
      max={max}
      value={value}
      onChange={e => onChange(e)}
    />
  );
}
