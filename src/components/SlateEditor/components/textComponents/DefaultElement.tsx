const DefaultElement = props => {
  return <p {...props.attributes} style={{ 
    textAlign: "justify",
    fontSize: '1.3rem'
  }}>{props.children}</p>
}

export default DefaultElement;