export interface ButtonInterface {
  type?: 'button' | 'submit' | 'reset'
  children: string
  variant: 'primary' | 'secondary' | 'dark' | 'light'
  href?: string
  submitting?: boolean
  styles?: string
}
