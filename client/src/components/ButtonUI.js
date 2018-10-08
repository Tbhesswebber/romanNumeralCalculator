import styled from 'styled-components';

const ternary = (condition, consequent, alternate) => (condition ? consequent : alternate);

export default styled.div`
  box-shadow: 0px 20px 30px -10px #00000050, 10px 10px 30px -10px #00000025, -10px 10px 30px -10px #00000025;
  background-color: ${({ type }) => ternary(!type, '#2244ee', ternary(type === 'number', '#666', '#994500'))};
  border-radius: 1rem;
  border: 0;
  color: ${({ type }) => ternary(!type || type !== 'number', '#eeeeddcc', '#111')};
  cursor: pointer;
  display: flex;
  align-content: center;
  justify-content: center;
  grid-column: span ${({ cols }) => cols || 1}

  :focus {
    outline: none;
  }

  p {
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 10vmin;
  }
`;
