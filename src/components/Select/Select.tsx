import { Dispatch } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  labelName: string;
  valueSelect: string;
  setCategorySelectValue: Dispatch<string>;
  options: string[];
};

function Select({ labelName, valueSelect, setCategorySelectValue, options }: Props) {
  const { register } = useForm();

  return (
    <label>
      <span>{labelName}:</span>
      <select
        {...register(valueSelect, {
          onChange: (e) => setCategorySelectValue(e.target.value),
        })}
        className="form__input_select"
        data-testid="select"
        required={true}
      >
        {options &&
          options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </select>
    </label>
  );
}

export default Select;
