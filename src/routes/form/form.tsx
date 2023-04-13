import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Cards from '../../components/Cards/Cards';
import RadioInput from '../../components/RadioInput/RadioInput';
import FileInput from '../../components/FileInput/FileInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

import './form.css';

function Form() {
  const imageFileInput = useRef<HTMLInputElement>(null);
  const materialCottonRadioInput = useRef<HTMLInputElement>(null);
  const materialDenimRadioInput = useRef<HTMLInputElement>(null);
  const [productNameInput, setProductNameInput] = useState('');
  const [releaseDateInput, setReleaseDateInput] = useState('');
  const [categorySelectValue, setCategorySelectValue] = useState('Футболки');
  const [isFormelyUsed, setIsFormelyUsed] = useState(false);

  const [createdCards, setCreatedCards] = useState(() => {
    return JSON.parse(localStorage.getItem('createdCards') || '[]');
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((_, e) => {
    alert('The data has been saved.');
    setCreatedCards([
      ...createdCards,
      {
        name: productNameInput,
        releaseDate: releaseDateInput,
        image: URL.createObjectURL(imageFileInput.current!.files![0]),
        category: categorySelectValue,
        isFormelyUsed: isFormelyUsed,
        material: materialCottonRadioInput.current?.checked
          ? materialCottonRadioInput.current?.value
          : materialDenimRadioInput.current?.value,
      },
    ]);
    e?.target.reset();
  });

  useEffect(() => {
    localStorage.setItem('createdCards', JSON.stringify(createdCards));
  }, [createdCards]);

  return (
    <div className="form-page">
      <form onSubmit={onSubmit} className="form" data-testid="form">
        <label>
          <span>Product name:</span>
          <input
            {...register('productNameInput', {
              onChange: (e) => setProductNameInput(e.target.value),
            })}
            type="text"
            className="form__input_text"
            data-testid="input_text"
            required={true}
          />
        </label>
        <label>
          <span>Release date:</span>
          <input
            {...register('releaseDateInput', {
              onChange: (e) => setReleaseDateInput(e.target.value),
            })}
            type="date"
            className="form__input_date"
            data-testid="input_date"
            required={true}
          />
        </label>
        <label>
          <span>Category:</span>
          <select
            {...register('categorySelectValue', {
              onChange: (e) => setCategorySelectValue(e.target.value),
            })}
            className="form__input_select"
            data-testid="select"
            required={true}
          >
            <option value="Футболки">Футболки</option>
            <option value="Джинсы">Джинсы</option>
            <option value="Кроссовки">Кроссовки</option>
          </select>
        </label>
        <div className="flex__container">
          <label>
            <span className="isFormelyUsed">Is formely used:</span>
            <input
              {...register('isFormelyUsed', {
                onChange: (e) => setIsFormelyUsed(e.target.checked),
              })}
              type="checkbox"
              className="h-mr30"
              data-testid="input_checkbox"
            />
          </label>
          <RadioInput labelName={'Хлопок'} value={'Хлопок'} inputName={materialCottonRadioInput} />
          <RadioInput labelName={'Деним'} value={'Деним'} inputName={materialDenimRadioInput} />
        </div>
        <FileInput labelName={'Upload file'} accept={'image/*'} inputName={imageFileInput} />
        <SubmitButton />
      </form>
      <Cards cards={createdCards} />
    </div>
  );
}

export default Form;
