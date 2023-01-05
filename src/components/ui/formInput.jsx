

const FormInput = ({type, text, css, name, value, functions, minLength, maxLength,required, placeholder, cssClass}) => {
    return(
        <input type={type} name={name} className={cssClass} onInput={functions} style={css} id="" placeholder={placeholder} minLength={minLength} maxLength={maxLength} required={required}  />
    )
}

export default FormInput