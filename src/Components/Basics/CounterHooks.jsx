import React, { useState } from 'react'

function CounterHooks() {

    const [count, setCount] = useState(10); // initialValue

    const handlemultipleincrement = (step) => {
        setCount((prevCount) => {
            console.log("prevCount", prevCount);
            return prevCount + step
        })

        setCount((prevCount) => {
            console.log("prevCount", prevCount);
            return prevCount + step
        })

        setCount((prevCount) => {
            console.log("prevCount", prevCount);
            return prevCount + step
        })
    }

    const handleincrement = (step) => {
        setCount(count + step)
    }

    const handledecrement = (step) => {
        setCount(count - step)
    }
    
    return (
        <>
            <h1>Counter - {count}</h1>
            <button onClick={() => handlemultipleincrement(1)}>Add by 1 (three times)</button>
            <button onClick={() => handleincrement(1)}>Add by 1</button>
            <button onClick={() => handleincrement(5)}>Add by 5</button>
            <button onClick={() => handledecrement(1)}>Subract by 1</button>
            <button onClick={() => handledecrement(5)}>Subract by 5</button>
        </>
    )
}

export default CounterHooks