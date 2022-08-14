export default interface InputInterface {
  id: string
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  errorMessage: string
  isTextArea?: boolean
  onChange: (event: React.FormEvent<any>) => void
}
