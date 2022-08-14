function getVariantClassname(variant: string): string {
  if (variant === 'primary') {
    return 'btn-primary'
  }

  if (variant === 'secondary') {
    return 'btn-secondary'
  }

  if(variant === 'dark') {
    return 'btn-dark'
  }

  if(variant === 'light'){
    return 'btn-light'
  }

  return ''
}

export { getVariantClassname }
