export function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const valid = regex.test(String(email).toLowerCase());
    return valid;
}