import InputErrorMessage from 'ui-library/InputErrorMessage'
import InputInterface from './interface'

const Input = ({
  id,
  label,
  name,
  type,
  value,
  errorMessage,
  isTextArea = false,
  onChange,
}: InputInterface) => {
  const classes = `appearance-none w-full block px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-dark focus:border-dark sm:text-sm ${
    errorMessage && 'border-danger'
  }`
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="pt-2">
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
            onChange={onChange}
            className={classes}
          />
        )}

        <InputErrorMessage text={errorMessage} />
      </div>
    </>
  )
}

export default Input
