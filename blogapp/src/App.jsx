// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>

// //       </div>
// //     )
// //   }
// // }




// // import React from 'react'

// // export default function App() {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }




// // import React from 'react'

// // function App() {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default App

// // import React from 'react'

// // const App = () => {

// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default App





// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>
// //       <h1 style={{color:"blue",fontSize:100,
// // backgroundColor:"orangered",


// //       }}>this is khushman</h1>

// // <div style={{height:100,
// //   width:100,
// //   backgroundColor:"blue"
// // }}>

// // </div>

// //     </div>
// //   )
// // }

// // export default App



// import React, { useState } from 'react'
// import HomePage from './pages/HomePage'
// import PlantPage from './pages/PlantPage'
// import BootStrapPage from './pages/BootStrapPage'
// import ExternalStyle from './pages/ExternalStyle'
// import StateEx from './components/StateEx'
// import LoginScreen from './auth/LoginScreen'
// import FormHandling from './components/FormHandling'
// import ListRendring from './components/ListRendring'
// import ListDoubt from './components/ListDoubt'
// import UseEffectEx from './components/UseEffectEx'
// import FetchEx from './components/FetchEx'
// const App = () => {

// const [isUser,setIsUser]=useState(true)

// if(isUser){
//   return <FetchEx/> 
// }
// else{
//   return <HomePage/>
// }

//   return (
//     <div>
//       {/* <HomePage/> */}
//       {/* <PlantPage/> */}
// {/* <BootStrapPage/> */}
// {/* <ExternalStyle/> */}
// {/*  */}
// {/* <StateEx/> */}
// {/* <FormHandling/> */}

// {/* <ListRendring/> */}
// {/* <ListDoubt/> */}


// {/* <UseEffectEx/> */}
// <FetchEx/>


// {/* {
//   isUser ? <HomePage/> : <LoginScreen/>
// } */}






//     </div>
//   )
// }

// export default App










import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BootStrapPage from './pages/BootStrapPage'
import PlantPage from './pages/PlantPage'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/boot' element={<BootStrapPage />} />
        <Route path='/plant' element={<PlantPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
