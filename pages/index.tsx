import CityCard from 'components/CityCard'
import DanceBackground from 'components/DanceBackground'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

function HomePage() {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <Navigation />
      <DanceBackground title="Select your city below." />

      <section className="bg-dark">
        <div className="base-container section text-center">
          <h2 className="text-h3 text-light pt-6">
            Find Places to dance in your city.
          </h2>

          <div className="pt-8 grid content-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {arr.map((_, i) => (
              <CityCard key={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default HomePage
