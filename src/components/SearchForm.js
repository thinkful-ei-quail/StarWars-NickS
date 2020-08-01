import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchPeople(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='SearchForm'>
        <label htmlFor='search'>
          Search :
          <input value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
