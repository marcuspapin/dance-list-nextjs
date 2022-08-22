import Image from 'next/image'
import Link from 'next/link'
import { Button, Pill } from 'ui-library'

function PlaceCard() {
  return (
    <div className="border m-4 px-6 py-4 rounded-lg flex flex-col justify-center items-center max-w-[1000px] lg:justify-between lg:flex-row">
      <div className="inline-block">
        <p className="text-h4">Salsa Condesa</p>
        <p className="text-h6 pb-2">Studio/Academy</p>
        <div>
          <Link href="/">
            <a className="pr-1">
              <Image src="/icons/instagram.svg" height={24} width={24} />
            </a>
          </Link>
          <Link href="/">
            <a className="pl-1">
              <Image src="/icons/facebook.svg" height={24} width={24} />
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
        <Button variant="dark">Learn More</Button>
      </div>
    </div>
  )
}

export default PlaceCard