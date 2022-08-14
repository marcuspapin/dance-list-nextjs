export default interface InputInterface {
  id: string
  label: string
  name: string
  type: string
  value: string
  errorMessage: string
  isTextArea?: boolean
  onChange: (event: React.FormEvent<any>) => void
}
