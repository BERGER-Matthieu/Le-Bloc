import react from "react";
import { TextInput } from "react-native";

const RegisterForm = () => {
    const [username, onChangeUsername] = react.useState("Username") 

    return (
        <TextInput
            value={username}
            onChange={onChangeUsername}
        />
    );
}

export default RegisterForm