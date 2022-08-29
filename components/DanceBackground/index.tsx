import Image from 'next/image'

function DanceBackground({ title }: { title: string }) {
  return (
    <div className="relative h-[450px] object-cover flex justify-center items-center">
      <Image src="/dance.jpg" layout="fill" />
      <h1 className="text-h1 absolute text-light">{title}</h1>
    </div>
  )
}
export default DanceBackground
