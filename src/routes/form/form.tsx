import React from 'react';
import Header from '../../components/Header/Header';

import './form.css';

type Props = {};

class Form extends React.Component<Props> {
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  selectValue: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  radioInput: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectValue = React.createRef();
    this.fileInput = React.createRef();
    this.checkboxInput = React.createRef();
    this.radioInput = React.createRef();
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert('The data has been saved.');
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Header title={'Form'} />
        <main className="main">
          <div className="form-page">
            <form onSubmit={this.handleSubmit} className="form">
              <label>
                <span>Product name:</span>
                <input type="text" ref={this.nameInput} className="form__input_text" required />
              </label>
              <label>
                <span>Date:</span>
                <input type="date" ref={this.dateInput} className="form__input_date" required />
              </label>
              <label>
                <span>Select:</span>
                <select
                  name="selectedOption"
                  defaultValue="option_1"
                  ref={this.selectValue}
                  className="form__input_select"
                  required
                >
                  <option value="option_1">Option 1</option>
                  <option value="option_2">Option 2</option>
                </select>
              </label>
              <div className="flex__container">
                <label>
                  <span>Checkbox:</span>
                  <input type="checkbox" ref={this.checkboxInput} className="h-mr30" required />
                </label>
                <label>
                  <span>Switcher:</span>
                  <input type="radio" name="switcher" ref={this.radioInput} required />
                </label>
                <label>
                  <span>Switcher:</span>
                  <input type="radio" name="switcher" ref={this.radioInput} />
                </label>
              </div>
              <label>
                <span>Upload file:</span>
                <input
                  type="file"
                  accept="image/*"
                  ref={this.fileInput}
                  className="form__input_file"
                  required
                />
              </label>
              <input type="submit" value="Submit" className="form__input_submit" />
            </form>
          </div>
        </main>
      </>
    );
  }
}

export default Form;
