import { useRef, useEffect, useState } from 'react'

function Map({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral
  zoom: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }))
    }
  }, [ref, map])

  return <div ref={ref} id="map" className="h-[600px] w-[600px]" />
}

export default Map
