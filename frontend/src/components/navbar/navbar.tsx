import './navbar.css'
import logo from '../../assets/logo.png'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { Products } from '../products-card/products'
import {productsRespone, productsAll} from '../../types/index'

export const Navbar = () => {

const [search, setSearch] = useState('')
const [products, setProducts] = useState<productsAll[]>([])
const [check, setCheck] = useState(false)

  useEffect(() => {
    const getProducts = async ():Promise<productsAll[]> => {
      const {data} = await axios.get<productsRespone>(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)

      const productList = data.results.slice(0, 4)

      setProducts(productList)
      return productList
    }
    getProducts()

  }, [check])

  const handleSearch = ({target}:ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value)
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCheck(!check)
  }

  return (
    <div>
      <div className='nav-container'>
        <nav className='nav-header'>
          <img src={logo} alt="logo" height={'40rem'} />

          <form className='nav-search' onSubmit={handleSubmit}>
            <input className='nav-search-input' name={search} onChange={handleSearch} value={search} type="text" placeholder='Nunca dejes de buscar' />
            <button className='nav-search-btn' type='submit'></button>
          </form>

        </nav>
      </div>
      {
        (products.length > 0) && <Products products={products} />
      }
    </div>

  )
}
