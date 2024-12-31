export interface FormInputType {
    labelName?: string;
    labelText?: string;
    inputID?: string;
    inputName?: string;
    inputType?: string;
    inputValue: string;
    errorRegex?: RegExp | string;
    errorText?: string | string[];
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputType> = ({
    labelName,
    labelText,
    inputID,
    inputName,
    inputType,
    inputValue,
    handleChange,
}) => {
    return (
        <div className='form-group'>
            <label htmlFor={labelName}>{labelText}</label>
            <input
                id={inputID}
                name={inputName}
                type={inputType}
                value={inputValue}
                onChange={handleChange}
            />
            <small>error</small>
        </div>
    );
};

export default FormInput;
