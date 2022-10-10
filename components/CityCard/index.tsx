import Image from 'next/image'
import { Button } from 'ui-library'

import { getCity } from 'helpers/helpers'

const CityCard = ({
  city: { location, count, key },
}: {
  city: { location: string; count: number; key: string }
}) => {
  const city = getCity(key)

  return (
    <div className="flex flex-col w-[350px] bg-gray rounded-xl m-4 mt-24">
      <div>
        <p className="relative -mb-32 z-10 text-h4 text-light">{location}</p>
        <Image
          src={`/city-photos/${city.image}`}
          width={350}
          height={207}
          className="rounded-t-xl"
        />
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
