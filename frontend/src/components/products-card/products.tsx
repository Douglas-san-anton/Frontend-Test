import './products.css'
import { produtsProp } from '../../types/index'

export const Products:React.FC<produtsProp> = ({products}) => {

  return (
    <div>
      <div className='products'>
        {products?.map(prop => (
          <>
            <div className='products-item'>
              <img className='products-img' src={prop.thumbnail} alt="producto" key={prop.id}/>
              <div className='products-title'>
                <h1>$ {prop.price}</h1>
                <h3>{prop.title} <br /> Completo Unico!</h3>

              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

