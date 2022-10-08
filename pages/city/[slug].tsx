import { useRouter } from 'next/router'

import { getPlaces } from 'helpers/helpers'

import DanceBackground from 'components/DanceBackground'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import PlaceCard from 'components/PlaceCard'

const CityPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const key = slug as string

  const places = getPlaces(key)

  return (
    <>
      <Navigation />

      <DanceBackground title={key} />

      <div className="bg-dark flex flex-col items-center py-6">
        {places.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>

      <Footer />
    </>
  )
}

export default CityPage
