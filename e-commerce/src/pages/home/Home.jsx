import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/heroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimomial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,deleteFromCart } from '../../redux/cartSlice'
function Home() {

  const dispatch = useDispatch()
  const cartItem = useSelector((state)=>state.cart)
console.log(cartItem)
  const addCart=()=>{
    dispatch(addToCart('shirt'))
  }

  const deleteCart=()=>{
    dispatch(deleteFromCart('shirt'))
  }
  return (
    
    <Layout>
      {/* <div className='flex gap-5 justify-center'>
     <button onClick={()=>addCart()}>add</button>
     <button onClick={()=>deleteCart()}>del</button>
      </div> */}
<HeroSection/>
<Filter/>
<ProductCard/>
<Track/>
<Testimonial/>
    </Layout>
  )
}

export default Home

