import Link from 'next/link'
import { RefreshIcon } from '@heroicons/react/solid'
import { getVariantClassname } from './helpers'
import { ButtonInterface } from './interface'

function Button({
  type,
  children,
  variant,
  href,
  submitting,
}: ButtonInterface) {
  const variantClassname = getVariantClassname(variant)
  const classes = `${variantClassname} btn text-h6 md:text-h5 whitespace-nowrap`

  if (href) {
    return (
      <Link href={href}>
        <a className={`${classes} inline-block`}>{children}</a>
      </Link>
    )
  }

  return (
    <button type={type} className={classes}>
      {submitting ? (
        <RefreshIcon className="animate-spin h-5 w-5" aria-hidden="true" />
      ) : (
        <>{children}</>
      )}
    </button>
  )
}

export default Button
