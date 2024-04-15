import { useState, useEffect } from "react";
import Display from "./Display";
import Search from "./Search";

const InputHooks = () => {

    const [search, setSearch] = useState("");
    const [persons, setPersons] = useState([]);
    const [filteredPersons, setFilteredPersons] = useState(persons);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setPersons(users))
    }, []);

    useEffect(() => {
        const newFilteredPersons = persons.filter(person =>
            person.name.toLowerCase().includes(search)
        )

        setFilteredPersons(newFilteredPersons)
    }, [persons, search]);

    const onSearchChange = (event) => {
        setSearch(event.target.value.toLowerCase())
    }

    return (
        <div>
            <Search
                className="search"
                placeholder="Enter a name"
                onChangeHandler={onSearchChange}
            />
            
            <Display filteredPersons={filteredPersons}></Display>
        </div>
    )
}

export default InputHooks;