import Image from 'next/image'
import Link from 'next/link'
import { Button, Pill } from 'ui-library'

function PlaceCard({ place: { name } }: { place: { name: string } }) {
  return (
    <div className="p-4">
      <div className="border bg-light px-6 py-4 rounded-lg flex flex-col justify-center items-center w-[1000px] lg:justify-between lg:flex-row">
        <div className="inline-block">
          <p className="text-h4">{name}</p>
          <p className="text-h6 pb-2">Studio/Academy</p>
          <div>
            <Link href="/">
              <a className="pr-1">
                <Image src="/icons/instagram-dark.svg" height={24} width={24} />
              </a>
            </Link>
            <Link href="/">
              <a className="pl-1">
                <Image src="/icons/facebook-dark.svg" height={24} width={24} />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap">
          <Pill variant="danger">Salsa</Pill>
          <Pill variant="primary">Bachata</Pill>
          <Pill variant="secondary">Cuban Salsa</Pill>
        </div>

        <div className="flex items-center lg:justify-center">
          <Button variant="dark" href="/place/salsa-condesa">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard
