import { getLocations } from 'helpers/helpers'

import { Location } from 'interfaces'

import CityCard from 'components/CityCard'
import DanceBackground from 'components/DanceBackground'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

interface HomePageInterface {
  locations: Location[]
}

function HomePage({ locations }: HomePageInterface) {
  return (
    <>
      <Navigation />
      <DanceBackground title="Select your city below." />

      <section className="bg-dark">
        <div className="base-container section text-center">
          <h2 className="text-h4 text-light pt-6 md:text-h3">
            Find Places to dance in your city.
          </h2>

          <div className="pt-8 grid content-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {locations.map((location: Location) => (
              <CityCard key={location.key} location={location} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default HomePage

export function getStaticProps() {
  const locations: Location[] = getLocations()
  return {
    props: { locations },
  }
}
