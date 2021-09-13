// Styled Components
import { CodeElementStyled } from '../../styles';

const CodeElement = props => {
  return (
    <CodeElementStyled {...props.attributes}>
      <code>{props.children}</code>
    </CodeElementStyled>
  )
}

export default CodeElement;