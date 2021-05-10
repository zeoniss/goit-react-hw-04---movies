import { Component } from 'react';
import '../SearchForm/SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  changeInput = e => {
    this.setState({ query: e.currentTarget.value });
  };
  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <form className="searchForm">
        <input
          className="searchForm-input"
          type="text"
          onChange={this.changeInput}
          value={this.state.query}
          placeholder="Search movies"
        ></input>
        <button
          className="searchForm-button"
          type="submit"
          onClick={this.formSubmit}
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
