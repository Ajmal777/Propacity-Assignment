import { createContext } from "react";

const FormContext = createContext();
export { FormContext };

const FormContextProvider = (props) => {
    function colorChange(val, setData) {
        const hexColor = val.toHexString();
        setData((note) => ({ ...note, color: hexColor }));
    }
    function titleChange(e, setData) {
        setData((note) => ({ ...note, title: e.target.value }));
    }
    function bodyChange(e, setData) {
        setData((note) => ({ ...note, body: e.target.value }));
    }
    return (
        <FormContext.Provider value={{ colorChange, titleChange, bodyChange }}>
            {props.children}
        </FormContext.Provider>
    );
};
export default FormContextProvider;
