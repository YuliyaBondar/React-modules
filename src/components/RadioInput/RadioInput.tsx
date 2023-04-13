import { RefObject } from 'react';

type Props = {
  labelName: string;
  value: string;
  inputName: RefObject<HTMLInputElement>;
};

function RadioInput({ labelName, value, inputName }: Props) {
  return (
    <label>
      <span>{labelName}:</span>
      <input type="radio" value={value} ref={inputName} required />
    </label>
  );
}

export default RadioInput;
