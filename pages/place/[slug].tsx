import Image from 'next/image'

import { Wrapper } from '@googlemaps/react-wrapper'

import places from 'data/places.json'

import { getKey } from 'helpers/helpers'

import Pill from 'ui-library/Pill'

import DanceBackground from 'components/DanceBackground'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import PlaceCard from 'components/PlaceCard'
import Map from 'components/Map'
import Marker from 'components/Map/Marker'

const CityPage = ({ place }: any) => {
  return (
    <>
      <Navigation />
      <DanceBackground title={place.name} />

      <div className="bg-dark flex flex-col items-center py-6">
        <div className="flex">
          <div className="text-light pr-10">
            <p>5 King street, Toronto On</p>
            <p>www.salsacondesa.com</p>
            <div>
              <a className="pr-1">
                <Image
                  src="/icons/instagram-light.svg"
                  height={24}
                  width={24}
                />
              </a>
              <a className="pl-1">
                <Image src="/icons/facebook-light.svg" height={24} width={24} />
              </a>
            </div>

            <div>
              <p className="text-h6">Schedule:</p>
              <p>Fridays: 8pm</p>
            </div>

            <div>
              <Pill variant="danger">Salsa</Pill>
              <Pill variant="primary">Bachata</Pill>
            </div>
          </div>

          <div className="pl-10">
            <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}>
              <Map center={{ lat: 43, lng: -79 }} zoom={6}>
                <Marker position={{ lat: 43, lng: -79 }} />
              </Map>
            </Wrapper>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-h2 text-light text-center">
            Other Dance studios in Toronto
          </p>
          {/* <PlaceCard />
          <PlaceCard /> */}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default CityPage

export async function getStaticPaths() {
  const paths = places.map(({ name }) => {
    return { params: { slug: getKey(name) } }
  })

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export function getStaticProps(context) {
  const slug = context.params.slug
  const place = places.find((place) => {
    return getKey(place.name) === slug
  })

  return { props: { place } }
}
