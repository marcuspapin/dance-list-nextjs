import InputErrorMessage from 'ui-library/InputErrorMessage'

import { SelectInterface, OptionInterface } from './interface'

const Select = ({
  id,
  label,
  name,
  value,
  options,
  onChange,
  errorMessage,
}: SelectInterface) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="pt-2">
        <select
          id={id}
          name={name}
          className={`${
            errorMessage && 'border-danger'
          } block w-full px-3 py-2 focus:outline-none focus:ring-dark focus:border-dark sm:text-sm rounded-md`}
          value={value}
          onChange={onChange}
        >
          {options.map(function displaySelectOptions({
            value,
            text,
          }: OptionInterface) {
            return (
              <option value={value} key={value}>
                {text}
              </option>
            )
          })}
        </select>
        <InputErrorMessage text={errorMessage} />
      </div>
    </>
  )
}

export default Select
