import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
// import { Card } from "./components/card/card";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          onchange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
