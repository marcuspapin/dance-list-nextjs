import { useRouter } from 'next/router'

import DanceBackground from 'components/DanceBackground'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import PlaceCard from 'components/PlaceCard'

const CityPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const city = slug as string

  return (
    <>
      <Navigation />

      <DanceBackground title={city} />

      <div className="bg-dark flex flex-col items-center py-6">
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </div>

      <Footer />
    </>
  )
}

export default CityPage
