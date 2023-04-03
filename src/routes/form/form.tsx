import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Cards from '../../components/Cards/Cards';

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

  const {
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      productNameInput: '',
      releaseDateInput: '',
      imageFileInput: null,
      categorySelectValue: 'Футболки',
      isFormelyUsed: false,
      materialCottonRadioInput: null,
      materialDenimRadioInput: null,
    },
  });

  const onSubmit = () => {
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
  };

  useEffect(() => {
    localStorage.setItem('createdCards', JSON.stringify(createdCards));
    if (formState.isSubmitSuccessful) {
      reset({
        productNameInput: '',
        releaseDateInput: '',
        imageFileInput: null,
        categorySelectValue: 'Футболки',
        isFormelyUsed: false,
        materialCottonRadioInput: null,
        materialDenimRadioInput: null,
      });
    }
  }, [formState, isSubmitSuccessful, createdCards, reset]);

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit(onSubmit)} className="form" data-testid="form">
        <label>
          <span>Product name:</span>
          <input
            type="text"
            className="form__input_text"
            onChange={(e) => setProductNameInput(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Release date:</span>
          <input
            type="date"
            onChange={(e) => setReleaseDateInput(e.target.value)}
            className="form__input_date"
            required
          />
        </label>
        <label>
          <span>Category:</span>
          <select
            name="selectedOption"
            onChange={(e) => setCategorySelectValue(e.target.value)}
            className="form__input_select"
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
              type="checkbox"
              onChange={(e) => setIsFormelyUsed(e.target.checked)}
              className="h-mr30"
              required
            />
          </label>
          <label>
            <span>Хлопок:</span>
            <input
              type="radio"
              name="switcher"
              value="Хлопок"
              ref={materialCottonRadioInput}
              required
            />
          </label>
          <label>
            <span>Деним:</span>
            <input type="radio" name="switcher" value="Деним" ref={materialDenimRadioInput} />
          </label>
        </div>
        <label>
          <span>Upload file:</span>
          <input
            type="file"
            accept="image/*"
            ref={imageFileInput}
            className="form__input_file"
            required
          />
        </label>
        <input type="submit" value="Submit" className="form__input_submit" />
      </form>
      <Cards cards={createdCards} />
    </div>
  );
}

export default Form;
