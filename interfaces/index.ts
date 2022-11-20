export interface Place {
  academy: boolean
  address: string
  city: string
  country: string
  dance_styles: string[]
  facebook: string
  instagram: string
  name: string
  schedule: string
  social: boolean
  website: string
  lat?: number
  lng?: number
}

export interface Location {
  city: string
  count: number
  country: string
  key: string
  location: string
}
