import places from 'data/places.json'
import cities from 'data/cities.json'

function getLocations() {
  const locations = places.map(
    ({ city, country }: { city: string; country: string }) => {
      return { location: `${city.trim()}, ${country.trim()}`, city, country }
    }
  )

  const countOfEachLocation = {}
  locations.forEach(({ location }) => {
    countOfEachLocation[location] = (countOfEachLocation[location] || 0) + 1
  })

  const nonDuplicateLocationKeys = []

  const uniqueLocations = locations.filter((element) => {
    const isDuplicate = nonDuplicateLocationKeys.includes(element.location)

    if (!isDuplicate) {
      nonDuplicateLocationKeys.push(element.location)
      return true
    }

    return false
  })

  const formattedLocations = uniqueLocations.map(
    ({ location, city, country }) => {
      const count = countOfEachLocation[location]
      const key = getLocationKey(location)

      return {
        location,
        city,
        country,
        count,
        key,
      }
    }
  )

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

function getKey(str: string) {
  return str.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')
}

function getPlaces(key: string) {
  const formattedLocations = places.map((place) => {
    const location = `${place.city.trim()}, ${place.country.trim()}`
    return {
      ...place,
      key: getLocationKey(location),
    }
  })

  return formattedLocations.filter(
    ({ key: locationKey }) => key === locationKey
  )
}

function getCity(key) {
  const city = cities.find(({ key: cityKey }) => key === cityKey)

  return city
}

function translateDanceStyles(
  style: string
): { formattedStyle: string; variant: string } | null {
  if (style === 'salsa') {
    return { formattedStyle: 'Salsa', variant: 'danger' }
  }

  if (style === 'bachata') {
    return { formattedStyle: 'Bachata', variant: 'secondary' }
  }

  if (style === 'cuban_salsa') {
    return { formattedStyle: 'Cuban Salsa', variant: 'primary' }
  }

  return null
}

export {
  getLocations,
  getPlaces,
  getCity,
  getKey,
  getLocationKey,
  translateDanceStyles,
}
