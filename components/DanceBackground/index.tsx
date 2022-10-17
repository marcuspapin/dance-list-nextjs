import Image from 'next/image'

function DanceBackground({ title }: { title: string }) {
  return (
    <div className="relative h-[450px] object-cover flex justify-center items-center">
      <div className="absolute top-0 left-0 bottom-0 right-0 opacity-50 bg-dark z-10"></div>
      <Image src="/dance.jpg" layout="fill" />
      <h1 className="text-h1 absolute text-light z-50">{title}</h1>
    </div>
  )
}
export default DanceBackground
