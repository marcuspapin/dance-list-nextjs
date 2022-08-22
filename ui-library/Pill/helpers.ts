function getVariantClassname(variant: string): string {
  if (variant === 'primary') {
    return 'bg-primary'
  }

  if (variant === 'secondary') {
    return 'bg-secondary'
  }

  if(variant === 'danger'){
    return 'bg-danger'
  }

  return ''
}

export { getVariantClassname }
