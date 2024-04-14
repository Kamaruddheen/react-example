import Display from "./Display";
import Search from "./Search";

const { Component } = require("react");


class InputBox extends Component {

    constructor() {
        super();

        this.state = {
            persons: [],
            search: ""
        }
    }
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState(
                () => {
                    return {persons : users}
                },
                () => {
                    console.log(this.state)
                }
            ))
    }

    // Optimizing the code using handleEvents
    // instead of using it in the render area
    onSearchChange = (event) => {
        this.setState(
            () => {
                return { search : event.target.value.toLowerCase() }                        
            }
        )
    }

    render() {
        // Destructing variables
        const { persons, search } = this.state;
        const { onSearchChange } = this;

        const filteredPersons = persons.filter(person => 
            person.name.toLowerCase().includes(search)
        )

        console.log(filteredPersons);

        return <div>

            <Search  className="search" placeholder="Enter a name" onChangeHandler={ onSearchChange }/>
            
            <Display filteredPersons={filteredPersons}></Display>
        </div>;
    }
}

export default InputBox;