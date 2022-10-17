import Image from 'next/image'
import { Button } from 'ui-library'

import { getCity } from 'helpers/helpers'

const CityCard = ({
  location: { city, country, count, key },
}: {
  location: {
    city: string
    country: string
    count: number
    key: string
  }
}) => {
  const { image } = getCity(key)

  return (
    <div className="flex flex-col w-[350px] h-[300px] bg-gray rounded-xl m-4 mt-24">
      <div>
        <p className="relative -mb-32 z-50 text-h4 text-light">
          {city}, <br /> {country}
        </p>
        <div className="relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 opacity-50 bg-dark z-10 mb-1"></div>
          <Image
            src={`/city-photos/${image}`}
            width={350}
            height={207}
            className="rounded-t-xl"
          />
        </div>
      </div>

      <div className="text-center py-3">
        <p className="text-h5 text-light">
          {count} Place{count > 1 && 's'} to dance
        </p>
        <Button
          type="button"
          variant="dark"
          styles="mx-auto"
          href={`/city/${key}`}
        >
          View all
        </Button>
      </div>
    </div>
  )
}

export default CityCard
