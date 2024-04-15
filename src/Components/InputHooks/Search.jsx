const Search = (props) => {
    return (
        <div>
            <input
                type="search"
                className={props.className}
                placeholder= {props.placeholder}
                onChange={ props.onChangeHandler }
            />
        </div>
    )
}

export default Search;