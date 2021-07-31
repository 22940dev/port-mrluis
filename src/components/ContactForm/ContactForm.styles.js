import styled from 'styled-components'
import { ipad, large } from 'src/styles/screens'

export const ContactFormStyled = styled.div`
  color: var(--dark-gray);

  @media (min-width: ${ipad}) {
    margin: 0 auto;
  }

  @media (min-width: ${large}) {
    padding-right: 4.5rem;
  }
`

export const ContactFormTitle = styled.h2`
  font-family: var(--inter-font);
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: ${large}) {
    text-align: left;
  }
`

export const ContactFormTitleIcon = styled.i`
  margin-right: 0.5rem;
`

export const ContactFormContent = styled.div`
  margin-top: 2rem;
`

export const ContactFormLabel = styled.label`
  font-family: var(--inter-font);
  font-weight: 300;
  padding-left: 0.5rem;
`

const contactFormInputStyle = `
  margin-top: 0.8rem;
  display: block;
  box-shadow: 0px 1px 15px var(--shadow-color);
  width: 100%;
  border-radius: 35px;
  border: none;
  padding: 0.8rem 1.6rem;
  outline: none;
  border: 0.5px solid rgba(0, 0, 0, 0);
  font-family: var(--open-sans-font);
  transition: var(--transition);
  resize: none;

  :hover {
    border: 0.3px solid var(--command-blue);

    ::placeholder {
      color: var(--oxford-blue);
    }
  }

  :focus {
    box-shadow: -3px 3px 19px var(--shadow-color);
    border: 0.5px solid var(--true-blue);
  }

  ::placeholder {
    font-family: var(--inter-font);
  }`

export const ContactFormInput = styled.input`
  ${contactFormInputStyle}
`

export const ContactFormTextarea = styled.textarea`
  ${contactFormInputStyle}

  padding: 1.2rem 1.6rem;
  border-radius: var(--radius);
`

export const ContactFormBtnSubmit = styled.button`
  border: none;
  text-align: center;
  padding: 0.9rem 1.5rem;
  border-radius: 40px;
  background: linear-gradient(130deg, rgba(3, 103, 233, 0.973) 34%, rgb(45, 34, 190) 88%);
  color: var(--gainsboro);
  font-family: var(--inter-font);
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  width: 11rem;
  font-size: 1.1rem;
  outline: none;
  transition: font-size 0.15s ease;

  @media (min-width: ${large}) {
    margin: 0;
    margin-top: 2rem;
    display: block;
  }

  &:hover {
    color: var(--light-gray);
  }
`
export const ContactFormBtnSubmitIcon = styled.i`
  margin-right: 0.6rem;
`
