import { Dispatch } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  labelName: string;
  valueName: string;
  setAgreed: Dispatch<boolean>;
};

function CheckboxInput({ labelName, valueName, setAgreed }: Props) {
  const { register } = useForm();

  return (
    <label className={valueName}>
      <span>{labelName}:</span>
      <input
        {...register(valueName, {
          onChange: (e) => setAgreed(e.target.checked),
        })}
        type="checkbox"
        className="h-mr30"
        data-testid="input_checkbox"
        required={true}
      />
    </label>
  );
}

export default CheckboxInput;
