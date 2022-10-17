import { getPlaces, getLocations } from 'helpers/helpers'

import DanceBackground from 'components/DanceBackground'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import PlaceCard from 'components/PlaceCard'

const CityPage = ({ places }: any) => {
  return (
    <>
      <Navigation />

      <DanceBackground title={`${places[0].city}, ${places[0].country}`} />

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

export async function getStaticPaths() {
  const locations = getLocations()

  const paths = locations.map(({ key }) => {
    return { params: { slug: key } }
  })

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export function getStaticProps(context) {
  const slug = context.params.slug
  const places = getPlaces(slug)

  return { props: { places } }
}
