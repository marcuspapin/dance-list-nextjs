import Link from 'next/link'
import NavLinkInterface from './interface'

/* 

ToDo: Create a base responsive navbar to re-use for projects

*/

const NavLink = ({ text, href, isActive }: NavLinkInterface): JSX.Element => {
  return (
    <span className="px-3">
      <Link href={href}>
        <a
          className={[
            isActive ? 'border-secondary' : 'border-dark',
            'border-b-2',
            'hover:border-secondary',
            'text-light',
            'pb-2',
          ].join(' ')}
        >
          {text}
        </a>
      </Link>
    </span>
  )
}

export default NavLink
