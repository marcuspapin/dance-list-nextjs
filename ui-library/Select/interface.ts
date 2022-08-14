export interface OptionInterface {
  value: string
  text: string
}

export interface SelectInterface {
  id: string
  label: string
  name: string
  value: string
  options: OptionInterface[]
  errorMessage: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
