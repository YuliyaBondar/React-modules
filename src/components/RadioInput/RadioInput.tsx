import { RefObject } from 'react';

type Props = {
  value: string;
  inputName: RefObject<HTMLInputElement>;
};

function RadioInput({ value, inputName }: Props) {
  return (
    <label>
      <span>{value}:</span>
      <input type="radio" name="switcher" value={value} ref={inputName} required />
    </label>
  );
}

export default RadioInput;
