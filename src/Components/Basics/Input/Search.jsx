const { Component } = require("react");

class Search extends Component {
    render() {
        return <div>
            <input
                type="search"
                className={this.props.className}
                placeholder= {this.props.placeholder}
                onChange={ this.props.onChangeHandler }
            />
        </div>
    }
}

export default Search;