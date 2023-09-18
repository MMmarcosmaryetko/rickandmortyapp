import { useState } from "react";
import { validateEmail, validatePassword } from "./validation"
import styled from "styled-components"

const FormReturn = styled.form`
min-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
`;

const Label = styled.label`
font-size: 30px;
font-weight: bold;
margin-bottom: 5px;
`;

const Input = styled.input`
padding: 10px;
border: 1px solid;
border-radius: 3px;
`;

const Error = styled.span`
color: red;
margin-top: 5px;
`;

const SubmitButton = styled.button`
background-color: black;
color: white;
font-size: 25px;
border-radius: 5px;
`;

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({})
    
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]:value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {
            email: validateEmail(userData.email),
            password: validatePassword(userData.password),
        }
        setErrors(validationErrors)
        if (!validationErrors.email && !validationErrors.password) {
            login(userData);
        }
    }
    
    return(
        <FormReturn onSubmit={handleSubmit}>
            <InputContainer>
                <Label htmlFor="email">Email: </Label>
                <Input type="text" 
                name="email" 
                value={userData.email} // Conecta tu estado local con los inputs correspondientes utilizando la propiedad value.
                onChange={handleChange}
                />
                <Error>{errors.email}</Error>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="password">Password: </Label>
                <Input type="password" 
                name="password"
                value={userData.password} //Conecta tu estado local con los inputs correspondientes utilizando la propiedad value.
                onChange={handleChange}
                />
                <Error>{errors.password}</Error>
            </InputContainer>
            <SubmitButton type="submit">Submit</SubmitButton>
        </FormReturn>
    );
}

export default Form