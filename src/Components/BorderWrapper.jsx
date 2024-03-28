function BorderWrapper(props) {
    return <div style={{ border: `5px solid ${props.color}`, marginBottom: `5px` }}>
        {props.children}
    </div>
}

export default BorderWrapper;