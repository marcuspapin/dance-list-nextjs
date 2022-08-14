export interface ButtonInterface {
  type: 'button' | 'submit' | 'reset'
  children: string
  variant: 'primary' | 'secondary'
  href?: string
  submitting?: boolean
}
