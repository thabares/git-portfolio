import './inputField.css';

const InputField = ({
  type,
  placeholder,
  name,
  required,
  className,
  maxLength,
}) => {
  return (
    <div className={`input-container ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        maxLength={maxLength}
        onKeyPress={(event) => {
          if (name === 'Mobile') {
            if (!/^[0-9]*$/.test(event.key)) {
              event.preventDefault();
            }
          }
        }}
      />
    </div>
  );
};
export default InputField;
