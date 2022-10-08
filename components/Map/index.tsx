import React, { useRef, useEffect, useState } from 'react'

function Map({
  center,
  zoom,
  children,
}: {
  center: google.maps.LatLngLiteral
  zoom: number
  children?: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }))
    }
  }, [ref, map])

  return (
    <>
      <div ref={ref} id="map" className="h-[500px] w-[500px]" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map })
        }
      })}
    </>
  )
}

export default Map
