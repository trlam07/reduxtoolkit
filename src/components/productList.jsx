import React, { useEffect } from 'react'
import fakeAPI from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/product/productSlice'
import { useNavigate } from 'react-router-dom'

function ProductList() {
  const navigator = useNavigate()
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.product);

  const fetchProducts = async() => {
    const response = await fakeAPI().get('')

    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return products?.length === 0?(<>...Loading</>): (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto',
      gap: 20,
      padding: 20,
      cursor: 'pointer',
    }}>{
      products.map((item, index) => {
        const {id, price, category, image, description} = item
        return (
          <div onClick={() => {
            navigator(`/${id}`)
          }} style={{
            border: '1px solid black',
            borderRadius: 10,
            overflow: 'hidden',
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }} key={index}>
            <img style={{
              width: 200,
              height: 200
            }} src={image} alt="image" />
            <div>
              <h3>{category}</h3>
              <p>{price}</p>
              <p>{description}</p>
            </div>
          </div>
        )
      })
      }</div>
  )
}

export default ProductList