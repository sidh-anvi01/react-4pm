import React from 'react'
import '../style/HomePage.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const categories = [
  { id: 1, icon: '🐶', name: 'Dogs', count: '120+ breeds' },
  { id: 2, icon: '🐱', name: 'Cats', count: '80+ breeds' },
  { id: 3, icon: '🐦', name: 'Birds', count: '45+ species' },
  { id: 4, icon: '🐠', name: 'Fish', count: '60+ varieties' },
  { id: 5, icon: '🐹', name: 'Small Pets', count: '30+ kinds' },
  { id: 6, icon: '🦎', name: 'Reptiles', count: '25+ kinds' },
]

const products = [
  {
    id: 1,
    emoji: '🦴',
    tag: 'Best Seller',
    name: 'Premium Chew Bones',
    desc: 'Dental care treats for adult dogs',
    price: 349,
    old: 499,
  },
  {
    id: 2,
    emoji: '🐾',
    tag: 'New',
    name: 'Cozy Cat Bed',
    desc: 'Soft plush nest, machine washable',
    price: 899,
    old: 1299,
  },
  {
    id: 3,
    emoji: '🦜',
    tag: 'Popular',
    name: 'Bird Seed Mix 1kg',
    desc: 'Balanced nutrition for parrots',
    price: 259,
    old: 349,
  },
  {
    id: 4,
    emoji: '🐟',
    tag: 'Combo',
    name: 'Aquarium Starter Kit',
    desc: 'Tank, filter, light & fish food',
    price: 1899,
    old: 2499,
  },
]

const features = [
  { icon: '🚚', title: 'Free Delivery', text: 'On all orders above ₹499' },
  { icon: '🩺', title: 'Vet Approved', text: 'Curated by certified vets' },
  { icon: '🔄', title: 'Easy Returns', text: '7-day no-questions returns' },
  { icon: '🎁', title: 'Pet Points', text: 'Earn rewards on every order' },
]

const testimonials = [
  {
    id: 1,
    text: 'Bruno absolutely loves the chew bones. Delivery was super fast and the packaging was adorable!',
    name: 'Ananya Sharma',
    pet: 'Golden Retriever parent',
    avatar: '👩',
  },
  {
    id: 2,
    text: 'I got my aquarium kit here for half the price of local stores. Quality is genuinely great.',
    name: 'Rohan Mehta',
    pet: 'Aquarium hobbyist',
    avatar: '👨',
  },
  {
    id: 3,
    text: 'The team helped me pick the right food for my senior cat. Real care, not just selling.',
    name: 'Priya Nair',
    pet: 'Persian cat parent',
    avatar: '👩‍🦰',
  },
]

const HomePage = () => {


function printHello(){
  // alert("helo")
  console.log("hello")
}
printHello()


const isLoggin=true 


const user={
  name:"rohan",
  age:32,
  phone:3456789,
  email:"roohan@gmail.com"
}


  return (
   <>
   
   <h1>hello</h1>


<h1>{!isLoggin ? "this is home page" :"this is login page"}</h1>

<h1>{user.name}</h1>
<h1>{user.age}</h1>

   
   </>
  )
}

export default HomePage