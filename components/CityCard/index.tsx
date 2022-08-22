import Image from 'next/image'
import { Button } from 'ui-library'

function CityCard() {
  return <div className="flex flex-col w-[350px] bg-gray rounded-xl m-4">
    <div className="rounded-xl">
      <Image src="/toronto.jpg" width={350} height={207}/>
    </div>

    <div className="text-center py-3">
        <p className="text-h5 text-light">10 Places to dance</p>
        <Button type="button" variant="dark" styles="mx-auto">View all</Button>
    </div>
    </div>
} 

export default CityCard