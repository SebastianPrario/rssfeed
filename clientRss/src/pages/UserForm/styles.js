import styled from 'styled-components'

export const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
`

export const StyledLabel = styled.label`
  display: block;
  margin: 15px;
  font-weight: bold;
 
`

export const StyledInput = styled.input`
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  border-color: ${props => props ? 'red' : 'black'};
`

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  opacity: ${props => !props.enabled ? 0.5 : 1};
`

export const StyledAlert = styled.span`
  padding: 10px;
  background-color: #f44336;
  color: black;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;

`
export default { StyledForm, StyledInput, StyledLabel, StyledAlert, StyledButton }
