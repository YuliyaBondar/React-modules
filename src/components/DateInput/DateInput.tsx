import { Dispatch } from 'react';
import { useForm } from 'react-hook-form';

import './DateInput.css';

type Props = {
  labelName: string;
  valueName: string;
  setReleaseDateInput: Dispatch<string>;
};

function DateInput({ labelName, valueName, setReleaseDateInput }: Props) {
  const { register } = useForm();

  return (
    <label>
      <span>{labelName}:</span>
      <input
        {...register(valueName, {
          onChange: (e) => setReleaseDateInput(e.target.value),
        })}
        type="date"
        className="form__input_date"
        data-testid="input_date"
        required={true}
      />
    </label>
  );
}

export default DateInput;
