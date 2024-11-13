export const checkValidData = (email, password, name = "") => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (name !== "") {
        if (name.length <= 3) return "Enter a valid name"
    }

    if (!isEmailValid) return "Email ID is not valid";

    if (!isPasswordValid) return "Password is not valid. it must contain min 8 characters, special character ans number";

    return null;
}