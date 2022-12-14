import InputErrorMessage from 'ui-library/InputErrorMessage'
import InputInterface from './interface'

const Input = ({
  id,
  label,
  name,
  type,
  value,
  placeholder,
  errorMessage,
  isTextArea = false,
  onChange,
}: InputInterface) => {
  const classes = `appearance-none max-w-[400px] block px-3 py-2 my-2 rounded-md shadow-sm focus:outline-none focus:ring-dark focus:border-dark focus:text-dark sm:text-sm ${
    errorMessage && 'border-danger text-danger'
  }`
  return (
    <>
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          cols={50}
          className={classes}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={classes}
        />
      )}

      <InputErrorMessage text={errorMessage} />
    </>
  )
}

export default Input
