class MenuItem {
  id: number
  title: string
  description: string
  image: string
  rating: number
  infos: string[]
  category: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    rating: number,
    infos: string[],
    category: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.rating = rating
    this.infos = infos
    this.category = category
  }
}

export default MenuItem
