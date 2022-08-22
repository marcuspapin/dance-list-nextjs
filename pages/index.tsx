import CityCard from 'components/CityCard'
import DanceBackground from 'components/DanceBackground'
import Navigation from 'components/Navigation'

function HomePage() {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <Navigation />
      <DanceBackground />

      <section className="bg-dark">
        <div className="base-container section text-center">
          <h2 className="text-h3 text-light">
            Find Places to dance in your city.
          </h2>

          {arr.map((_, i) => (
            <CityCard key={i} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
