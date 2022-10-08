import places from 'data/places.json'

function getLocation() {
  const locations = places.map(
    ({ city, country }: { city: string; country: string }) =>
      `${city.trim()}, ${country.trim()}`
  )

  const countOfEachLocation = {}
  locations.forEach((location) => {
    countOfEachLocation[location] = (countOfEachLocation[location] || 0) + 1
  })

  // use new Set to remove duplicates, then convert back to an array
  const nonDuplicateLocations = Array.from(new Set(locations))

  const formattedLocations = nonDuplicateLocations.map((location) => {
    const count = countOfEachLocation[location]
    const key = getLocationKey(location)

    return {
      location,
      count,
      key,
    }
  })

  return formattedLocations
}

function getLocationKey(location: string) {
  return location
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll(',', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
}

export { getLocation }
