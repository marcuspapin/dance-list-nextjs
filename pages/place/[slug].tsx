import { useRouter } from 'next/router'
import Image from 'next/image'

import { Wrapper } from '@googlemaps/react-wrapper'

import Pill from 'ui-library/Pill'

import DanceBackground from 'components/DanceBackground'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import PlaceCard from 'components/PlaceCard'
import Map from 'components/Map'
import Marker from 'components/Map/Marker'

const CityPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const place = slug as string

  return (
    <>
      <Navigation />
      <DanceBackground title={place} />

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
          <PlaceCard />
          <PlaceCard />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default CityPage
