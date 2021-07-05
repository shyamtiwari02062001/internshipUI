export const passwordValidation = (value) => {
    const regExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return !regExp.test(value);
};
export const numberValidation = (value) => {
    const regExp=/^[1-9]\d*(\.\d+)?$/;
    return !regExp.test(value);
};
export const emailValidation = (value) => {
    const regExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !regExp.test(value);
};
export const phoneValidation = (value) => {
    const regExp=/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    return !regExp.test(value);
};