import React from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import { IData } from '../../utils/interfaces';

import './form.css';

type Props = {};

class Form extends React.Component<Props, IData[]> {
  productNameInput: React.RefObject<HTMLInputElement>;
  releaseDateInput: React.RefObject<HTMLInputElement>;
  categorySelectValue: React.RefObject<HTMLSelectElement>;
  imageFileInput: React.RefObject<HTMLInputElement>;
  isFormelyUsed: React.RefObject<HTMLInputElement>;
  materialCottonRadioInput: React.RefObject<HTMLInputElement>;
  materialDenimRadioInput: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.productNameInput = React.createRef();
    this.releaseDateInput = React.createRef();
    this.categorySelectValue = React.createRef();
    this.imageFileInput = React.createRef();
    this.isFormelyUsed = React.createRef();
    this.materialCottonRadioInput = React.createRef();
    this.materialDenimRadioInput = React.createRef();
    this.state = {
      createdCards: JSON.parse(localStorage.getItem('createdCards') || '[]'),
    };
  }

  componentDidUpdate() {
    localStorage.setItem('createdCards', JSON.stringify(this.state.createdCards));
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert('The data has been saved.');
    const createdCards = this.state.createdCards;
    const createdCard = {
      name: this.productNameInput.current.value,
      releaseDate: this.releaseDateInput.current.value,
      image: this.imageFileInput.current.value,
      category: this.categorySelectValue.current.value,
      isFormelyUsed: this.isFormelyUsed.current.checked,
      material: this.materialCottonRadioInput.current.checked
        ? this.materialCottonRadioInput.current.value
        : this.materialDenimRadioInput.current.value,
    };
    createdCards.push(createdCard);
    this.setState({ createdCards });
    event.preventDefault();
    (event.target as HTMLFormElement).reset();
  }

  render() {
    console.log(this.state.createdCards);
    return (
      <>
        <Header title={'Form'} />
        <main className="main">
          <div className="form-page">
            <form onSubmit={this.handleSubmit} className="form">
              <label>
                <span>Product name:</span>
                <input
                  type="text"
                  ref={this.productNameInput}
                  className="form__input_text"
                  required
                />
              </label>
              <label>
                <span>Release date:</span>
                <input
                  type="date"
                  ref={this.releaseDateInput}
                  className="form__input_date"
                  required
                />
              </label>
              <label>
                <span>Category:</span>
                <select
                  name="selectedOption"
                  defaultValue="option_1"
                  ref={this.categorySelectValue}
                  className="form__input_select"
                  required
                >
                  <option value="Футболки">Футболки</option>
                  <option value="Джинсы">Джинсы</option>
                  <option value="Кроссовки">Кроссовки</option>
                </select>
              </label>
              <div className="flex__container">
                <label>
                  <span className="isFormelyUsed">Is formely used:</span>
                  <input type="checkbox" ref={this.isFormelyUsed} className="h-mr30" required />
                </label>
                <label>
                  <span>Хлопок:</span>
                  <input
                    type="radio"
                    name="switcher"
                    value="Хлопок"
                    ref={this.materialCottonRadioInput}
                    required
                  />
                </label>
                <label>
                  <span>Деним:</span>
                  <input
                    type="radio"
                    name="switcher"
                    value="Деним"
                    ref={this.materialDenimRadioInput}
                  />
                </label>
              </div>
              <label>
                <span>Upload file:</span>
                <input
                  type="file"
                  accept="image/*"
                  ref={this.imageFileInput}
                  className="form__input_file"
                  required
                />
              </label>
              <input type="submit" value="Submit" className="form__input_submit" />
            </form>
            {this.state ? <Cards cards={this.state.createdCards} /> : ''}
          </div>
        </main>
      </>
    );
  }
}

export default Form;
