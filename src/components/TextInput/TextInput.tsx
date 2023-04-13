import { Dispatch } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  labelName: string;
  valueName: string;
  setProductNameInput: Dispatch<string>;
};

function TextInput({ labelName, valueName, setProductNameInput }: Props) {
  const { register } = useForm();

  return (
    <label>
      <span>{labelName}:</span>
      <input
        {...register(valueName)}
        onClick={(e) => setProductNameInput((e.target as HTMLInputElement).value)}
        type="text"
        className="form__input_text"
        data-testid="input_text"
        required={true}
      />
    </label>
  );
}

export default TextInput;
