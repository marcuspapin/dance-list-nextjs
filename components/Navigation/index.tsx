import Image from 'next/image'
import { Button, NavLink } from 'ui-library'

function Navigation() {
  return (
    <nav className="bg-dark py-4">
      <div className="base-container flex justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" width={225} height={25} />
        </div>
        <div className="flex items-center">
          <NavLink text="Cities" href="/" isActive={true} />
          <NavLink text="Contact" href="/contact" isActive={false} />
          <Button variant="secondary">Add a Place</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
