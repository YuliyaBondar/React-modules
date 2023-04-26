import { RefObject } from 'react';

import './FileInput.css';

type Props = {
  labelName: string;
  accept: string;
  inputName: RefObject<HTMLInputElement>;
};

function FileInput({ labelName, accept, inputName }: Props) {
  return (
    <label>
      <span>{labelName}:</span>
      <input
        type="file"
        accept={accept}
        ref={inputName}
        className="form__input_file"
        data-testid="input_file"
        required
      />
    </label>
  );
}

export default FileInput;
