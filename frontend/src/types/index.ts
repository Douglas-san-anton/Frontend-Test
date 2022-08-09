export type productsRespone = {
  results: productsAll[]
}

export type productsAll = {
  id: string
  title: string
  price: number
  thumbnail: string
}

export type produtsProp = {
  products: productsAll[]
}