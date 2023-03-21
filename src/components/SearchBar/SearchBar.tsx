import React from 'react';
import { Props, SearchState } from '../../utils/interfaces_and_types';

import './SearchBar.css';

class SearchBar extends React.Component<Props, SearchState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
  }

  componentDidUpdate(prevState: SearchState) {
    if (prevState.searchValue !== this.state.searchValue) {
      localStorage.setItem('searchValue', this.state.searchValue);
    }
  }

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    this.setState({ searchValue });
  };

  render() {
    return (
      <form id="search-form" role="search">
        <input
          aria-label="Search"
          placeholder="Search"
          type="search"
          value={this.state.searchValue}
          onInput={this.handleSearchChange}
          className="search-input"
        />
      </form>
    );
  }
}

export default SearchBar;
