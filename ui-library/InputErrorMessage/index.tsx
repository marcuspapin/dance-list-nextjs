const InputErrorMessage = ({ text }: { text: string }) => {
  if (!text) {
    return null
  }

  return <p className="pt-2 text-danger">{text}</p>
}

export default InputErrorMessage
