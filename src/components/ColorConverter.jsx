import { useState } from 'react';
import ColorDisplay from "./ColorDisplay";
import InputHex from "./InputHex";
import OutputRgb from "./OutputRgb";

export default function ColorConverter() {
  const [rgb, setRgb] = useState('');

  const getRgbString = (input) => {
    let rgbString = '';
      rgbString = 'rgb(';
      rgbString += parseInt(input.substring(1, 3), 16) + ', ';
      rgbString += parseInt(input.substring(3, 5), 16) + ', ';
      return rgbString += parseInt(input.substring(5, 7), 16) + ')';
  }

  const onInputChange = (inputEvent) => {
    const input = inputEvent.target.value;
    if (input.length === 7) {
      /#[\d|a-f|A-F]{6}$/.test(input) ? setRgb(getRgbString(input)) : setRgb('Ошибка!');
    }
  }

  return (
    <>
      <div className="form-container">
        <InputHex onInputChange={onInputChange} />
        <OutputRgb rgb={rgb} />
      </div>
      <ColorDisplay color={rgb} />
    </>
  )
}
