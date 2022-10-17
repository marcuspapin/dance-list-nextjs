import { getLocations } from 'helpers/helpers'

import CityCard from 'components/CityCard'
import DanceBackground from 'components/DanceBackground'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

function HomePage() {
  const locations = getLocations()
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
            {locations.map((location) => (
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
