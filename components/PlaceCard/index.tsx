import Image from 'next/image'

import { getKey, translateDanceStyles } from 'helpers/helpers'
import { Place } from 'interfaces'

import { Button, Pill } from 'ui-library'

function PlaceCard({
  place: {
    name,
    academy,
    social,
    dance_styles: danceStyles,
    instagram,
    facebook,
  },
}: {
  place: Place
}) {
  return (
    <div className="p-4 lg:relative">
      <div className="border bg-light px-6 py-4 rounded-lg flex flex-col justify-center items-center text-center md:w-[500px] lg:text-left lg:w-[800px] xl:w-[1000px] lg:justify-between lg:flex-row">
        <div className="inline-block">
          <p className="text-h4">{name}</p>
          {academy && <p className="text-h6">Studio/Academy</p>}
          {social && <p className="text-h6 pb-2">Social</p>}
          <div className="flex justify-center lg:justify-start">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                className="pr-1"
                rel="noreferrer"
              >
                <Image src="/icons/instagram-dark.svg" height={24} width={24} />
              </a>
            )}

            {facebook && (
              <a
                href={instagram}
                target="_blank"
                className="pl-1"
                rel="noreferrer"
              >
                <Image src="/icons/facebook-dark.svg" height={24} width={24} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap lg:absolute lg:left-80 xl:left-96">
          {danceStyles.map((style: string) => {
            const { formattedStyle, variant } = translateDanceStyles(style)
            return (
              <Pill key={style} variant={variant}>
                {formattedStyle}
              </Pill>
            )
          })}
        </div>

        <div className="flex items-center lg:justify-center">
          <Button variant="dark" href={`/place/${getKey(name)}`}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard
