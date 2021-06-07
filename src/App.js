import {Component} from 'react'
import {CardList} from './component/card-list/card-list.component'
import './App.css';
import { SearchBox } from './component/search-box/search-box.component'
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount()
    {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(user => {this.setState({monsters: user})})
    }

  render(){
    const {monsters, searchField} = this.state;
    const fileredMonsters = monsters.filter(monster => (monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = 'Search Monsters'
          handleChange = { e => this.setState( { searchField: e.target.value}) } />
        <CardList monsters={fileredMonsters} />
      </div>
    )
  }
}
export default App;
