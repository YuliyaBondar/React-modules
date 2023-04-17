import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import Cards from '../../components/Cards/Cards';
import TextInput from '../../components/TextInput/TextInput';
import DateInput from '../../components/DateInput/DateInput';
import Select from '../../components/Select/Select';
import CheckboxInput from '../../components/CheckboxInput/CheckboxInput';
import RadioInput from '../../components/RadioInput/RadioInput';
import FileInput from '../../components/FileInput/FileInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { cardsCreator } from '../../features/cardsCreator/cardsCreatorSlice';

import './form.css';

function Form() {
  const { handleSubmit } = useForm();

  const dispatch = useDispatch();
  const createdCards = useSelector((state: RootState) => state.cardsCreator.value);

  const imageFileInput = useRef<HTMLInputElement>(null);
  const materialCottonRadioInput = useRef<HTMLInputElement>(null);
  const materialDenimRadioInput = useRef<HTMLInputElement>(null);
  const [productNameInput, setProductNameInput] = useState('');
  const [releaseDateInput, setReleaseDateInput] = useState('');
  const [categorySelectValue, setCategorySelectValue] = useState('Футболки');
  const [isAgreed, setAgreed] = useState(false);

  const onSubmit = handleSubmit((_, e) => {
    alert('The data has been saved.');
    dispatch(
      cardsCreator({
        name: productNameInput,
        releaseDate: releaseDateInput,
        image: URL.createObjectURL(imageFileInput.current!.files![0]),
        category: categorySelectValue,
        isAgreed: isAgreed,
        material: materialCottonRadioInput.current?.checked
          ? materialCottonRadioInput.current?.value
          : materialDenimRadioInput.current?.value,
      })
    );
    e?.target.reset();
  });

  return (
    <div className="form-page">
      <form onSubmit={onSubmit} className="form" data-testid="form">
        <TextInput
          labelName={'Product name'}
          valueName={'productNameInput'}
          setProductNameInput={setProductNameInput}
        />
        <DateInput
          labelName={'Release date'}
          valueName={'releaseDateInput'}
          setReleaseDateInput={setReleaseDateInput}
        />
        <Select
          labelName={'Category'}
          valueSelect={'categorySelectValue'}
          setCategorySelectValue={setCategorySelectValue}
          options={['Футболки', 'Джинсы', 'Кроссовки']}
        />
        <div className="flex__container">
          <RadioInput value={'Хлопок'} inputName={materialCottonRadioInput} />
          <RadioInput value={'Деним'} inputName={materialDenimRadioInput} />
        </div>
        <FileInput labelName={'Upload file'} accept={'image/*'} inputName={imageFileInput} />
        <CheckboxInput
          labelName={'I agree to submit the form'}
          valueName={'isAgreed'}
          setAgreed={setAgreed}
        />
        <SubmitButton />
      </form>
      <Cards cards={createdCards} />
    </div>
  );
}

export default Form;
