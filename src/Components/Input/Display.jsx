const { Component } = require("react");

class Display extends Component {
    render() {
        return <div>
            {
                this.props.filteredPersons.map((person) => {
                    return <h1 key={person.id}>
                        { person.name }
                    </h1>
                })
            }
        </div>
    }
}

export default Display;