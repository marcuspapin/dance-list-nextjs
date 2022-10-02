import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-gray py-10 text-center">
      <Image src="/logo.png" width={225} height={25} />
    </footer>
  )
}

export default Footer
