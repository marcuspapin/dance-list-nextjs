import { Button, NavLink } from 'ui-library'

function Navigation() {
  return (
    <nav className="bg-dark py-4">
      <div className="base-container flex justify-between">
        <div className="text-light flex items-center">Logo goes here</div>
        <div className="flex items-center">
          <NavLink text="Contact" href="/contact" isActive={false} />
          <Button variant="secondary">Add a Place</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
