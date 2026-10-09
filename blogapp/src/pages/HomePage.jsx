import React from 'react'
import '../style/HomePage.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'
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


const navigate=useNavigate()

  return (
   <>
   
   <h1>hello</h1>


<h1>{!isLoggin ? "this is home page" :"this is login page"}</h1>

<h1>{user.name}</h1>
<h1>{user.age}</h1>



<button onClick={()=>navigate("/boot")}>click</button>

    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </>
  )
}

export default HomePage