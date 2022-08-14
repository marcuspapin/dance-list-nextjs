function getVariantClassname(variant: string): string {
  if (variant === 'primary') {
    return 'btn-primary'
  }

  if (variant === 'secondary') {
    return 'btn-secondary'
  }

  return ''
}

export { getVariantClassname }
