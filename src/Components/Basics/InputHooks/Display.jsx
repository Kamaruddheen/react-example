const Display = (props) => {
    return (
        <div>
            {
                props.filteredPersons.map((person) => {
                    return <h1 key={person.id}>
                        { person.name }
                    </h1>
                })
            }
        </div>
    )
}

export default Display;