import Image from 'next/image'

import { Wrapper } from '@googlemaps/react-wrapper'

import places from 'data/places.json'

import { getKey, getPlaces, getLocationKey } from 'helpers/helpers'

import { Place } from 'interfaces'

import Pill from 'ui-library/Pill'

import DanceBackground from 'components/DanceBackground'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import PlaceCard from 'components/PlaceCard'
import Map from 'components/Map'
import Marker from 'components/Map/Marker'

interface PlacePageInterface {
  place: Place
  otherPlaces: Place[]
}

const CityPage = ({
  place: {
    academy,
    address,
    city,
    dance_styles: danceStyles,
    facebook: facebookLink,
    instagram: instagramLink,
    name,
    schedule,
    social,
    website,
  },
  otherPlaces,
}: PlacePageInterface) => (
  <>
    <Navigation />
    <DanceBackground title={name} />

    <div className="bg-dark flex flex-col items-center py-6">
      <div className="flex">
        <div className="text-light pr-10">
          <p className="pt-2 pb-1">{address}</p>
          <a
            href={website}
            target="_blank"
            className="mb-2 pt-1"
            rel="noreferrer"
          >
            {website}
          </a>
          <div>
            {instagramLink && (
              <a
                href={instagramLink}
                target="_blank"
                className="pr-1 pt-2 cursor-pointer"
                rel="noreferrer"
              >
                <Image
                  src="/icons/instagram-light.svg"
                  height={24}
                  width={24}
                />
              </a>
            )}

            {facebookLink && (
              <a
                href={instagramLink}
                target="_blank"
                className="pl-1 pt-2 cursor-pointer"
                rel="noreferrer"
              >
                <Image src="/icons/facebook-light.svg" height={24} width={24} />
              </a>
            )}
          </div>

          <div>
            <p>
              <span className="text-h6 pr-2">Academy:</span>
              {academy ? 'Yes' : 'No'}
            </p>
            <p>
              <span className="text-h6 pr-2">Social:</span>
              {social ? 'Yes' : 'No'}
            </p>
            <p className="text-h6">Schedule:</p>
            <p>{schedule}</p>
          </div>

          <div>
            {danceStyles.map((style) => (
              <Pill key={style} variant="danger">
                {style}
              </Pill>
            ))}
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
          Other Dance studios in {city}
        </p>

        {otherPlaces.map((otherPlace: Place) => (
          <PlaceCard key={otherPlace.name} place={otherPlace} />
        ))}
      </div>
    </div>

    <Footer />
  </>
)

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
  const slug: string = context.params.slug
  const place: Place = places.find((place: Place) => {
    return getKey(place.name) === slug
  })

  const location = `${place.city.trim()}, ${place.country.trim()}`

  const locationKey = getLocationKey(location)

  const otherPlaces: Place[] = getPlaces(locationKey).filter(
    (place) => getKey(place.name) !== slug
  )

  return { props: { place, otherPlaces } }
}
