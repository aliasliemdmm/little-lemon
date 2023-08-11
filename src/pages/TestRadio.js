import RadioButton from "../components/RadioButton";

function TestRadio() {
    const seating = ["Standard","Outside"];
    return (
        <div>
        <label htmlFor="seating">Seating Options
        {seating.map((slot) => (
            <RadioButton
            name="seating"
            label={slot}
            value={slot}
            classname="radio"
//            onChange={changeSeatingHandler}
            />
        ))}
        </label>
        </div>
    )
}

export default TestRadio;
