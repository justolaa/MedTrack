import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
// import AboutUs from './pages/AboutUs'
// import Sidebar from './components/Sidebar'
// import Error from './pages/ErrorPage'
// import Login from '../src/pages/Login'
// import Signup from '../src/pages/Signup'
// import Account from '../src/pages/Account'
// import Admin from './pages/Admin'
// import Owner from './pages/Owner'

// import ProtectedRoute from './pages/ProtectedRoute'




function App() {
  return(
    <Router>
      {/* <ScrollToTop/> */}
      <Navbar/>
      {/* <Sidebar/> */}
      <Routes>
        <Route path='/' element={<Home/> }></Route>
        {/* <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}></Route>
        <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}></Route>
        <Route path='/owner' element={<ProtectedRoute><Owner/></ProtectedRoute>}></Route> */}
        {/* <Route path='*' element={<Error/> }></Route> */}
      </Routes>
      {/* <Footer/> */}
    </Router> 
  
  ) 
}

export default App
