/* eslint-disable */

import CityCard from 'components/CityCard'
import PlaceCard from 'components/PlaceCard'
import { Button, Input, NavLink, Select, Pill } from 'ui-library/'

export default function DesignSystem() {
  return (
    <>
      <div className="bg-dark py-8">
        <NavLink text="Home" href="/" isActive={true} />
        <NavLink text="About" href="/about" isActive={false} />
        <NavLink text="Articles" href="/articles" isActive={false} />
      </div>
      <div className="p-5">
        {/* Typography */}
        <h1 className="text-h1">Heading One</h1>
        <h2 className="text-h2">Heading Two</h2>
        <h3 className="text-h3">Heading Three</h3>
        <h4 className="text-h4">Heading Four</h4>
        <h5 className="text-h5">Heading Five</h5>
        <h6 className="text-h6">Heading Six</h6>

        <br />

        <p>
          <span className="font-bold">Body:</span> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nemo, explicabo inventore saepe eligendi
          odit quasi itaque iusto assumenda officiis perspiciatis. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nemo, explicabo inventore
          saepe eligendi odit quasi itaque iusto assumenda officiis
          perspiciatis.
        </p>

        <br />

        <p className="text-small">
          <span className="font-bold">Small Body:</span> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nemo, explicabo inventore saepe
          eligendi odit quasi itaque iusto assumenda officiis perspiciatis.
        </p>

        <br />
        <br />

        {/* Buttons */}
        <Button type="button" variant="primary">
          Primary
        </Button>

        <Button type="button" variant="secondary">
          Secondary
        </Button>

        <Button type="button" variant="primary" href="/new">
          Link
        </Button>

        <Button type="button" variant="dark">
          Dark
        </Button>

        <Button type="button" variant="light">
          Light 
        </Button>

        {/* Inputs */}

        <div className="w-1/5">
          <Input
            id="display"
            label="Full Name"
            name="display"
            type="text"
            placeholder="Placeholder"
            value=""
            errorMessage="Input is required."
            onChange={() => {}}
          />

          <br />

          <Select
            id="location"
            name="location"
            label="Location"
            options={[
              { value: 'can', text: 'Canada' },
              { value: 'usa', text: 'United State' },
              { value: 'mxn', text: 'Mexico' },
            ]}
            onChange={() => {}}
            value="can"
            errorMessage="Select is required."
          />
        </div>

        <br />

        <div className="w-1/3">
          <Input
            id="display"
            label="Full Name"
            name="display"
            type="text"
            placeholder='Placeholder'
            value="Placeholder"
            isTextArea={true}
            errorMessage="Input is required."
            onChange={() => {}}
          />
        </div>

        <Pill variant='primary'>Primary</Pill>
        <Pill variant='secondary'>Secondary</Pill>
        <Pill variant='danger'>Danger</Pill>

      </div>

      <h1 className="text-h1">Components</h1>

      <CityCard />

      <PlaceCard />
    </>
  )
}
