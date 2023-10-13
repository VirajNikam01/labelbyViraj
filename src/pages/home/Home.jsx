import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'

const Home = () => {
    
const dispatch = useDispatch()
const cardItem = useSelector((state)=>state.cart)
console.log(cardItem)

const addCart = ()=>{
  dispatch(addToCart("shirt"))
}
const deleteCard = ()=>{
  dispatch(deleteFromCart("Shirt"))
}
  return (
    
    <Layout>
      <div className="flex gap-5 justify-center">
        <button className='bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className='bg-gray-300 p-5' onClick={()=> deleteFromCart()}>Delete</button>
      </div>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Testimonial/>
    </Layout>

  )
}

export default Home