const RadioButton = ({ name, label, checked, value, onChange }) => {
    return (
        <div>
            <label htmlFor={value} >
                <input type="radio" name={name} checked={checked} id={value} value={value} onChange={onChange}/>
                {label}
            </label>
        </div>
    );
};

export default RadioButton;