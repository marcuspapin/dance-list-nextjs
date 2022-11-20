import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavLink } from 'ui-library'

function Navigation() {
  const router = useRouter()
  const isCities = router.asPath === '/'

  return (
    <nav className="bg-dark py-8 px-4">
      <div className="base-container flex justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="cursor-pointer">
              <Image src="/logo.png" width={225} height={25} />
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <NavLink text="Cities" href="/" isActive={isCities} />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
