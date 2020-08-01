import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // people: [],
      person: {},
    };
  }

  searchPeople = (char) => {
    fetch(`https://swapi-thinkful.herokuapp.com/api/people?search=${char}`)
      .then((response) => response.json())
      .then((person) => this.setState({ person: person.results[0] }));
  };

  // componentDidMount() {
  //   fetch('https://swapi-thinkful.herokuapp.com/api/people')
  //     .then((res) => res.json())
  //     .then((result) => {
  //       this.setState({
  //         people: result.results,
  //       });
  //     });
  // }

  render() {
    return (
      <main className='App'>
        <Header />
        <div className='searchForm'>
          <SearchForm searchPeople={this.searchPeople} />
        </div>
        <div>
          <Results person={this.state.person} />
        </div>
      </main>
    );
  }
}
