import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import { EngineeringProducts } from './pages/services/products & solutions/engineeringProducts'
import Software from './pages/services/products & solutions/softwareLicense'
import ItProduct from './pages/services/products & solutions/itProduct'
// import MarketingServices from './pages/services/professional Services/marketingServices'
import ProfessionalServices from './pages/services/professional Services/professionalService'
import TechnologyAugmentation from './pages/services/oracle/technologyAgmentation'
import TechnologyProduct from './pages/services/oracle/technologyProduct'
// import {EngineeringProducts} from "./pages/services/products & solutions"

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/software_license' element={<Software/>}/>
        <Route path='/it-products' element={<ItProduct/>}/>
        <Route path='/professional-services' element={<ProfessionalServices/>}/>
        <Route path='/engineering-products-and-solutions' Component={EngineeringProducts}/>
        <Route path='/technology-augmentation-service' Component={TechnologyAugmentation}/>
        <Route path='/technology-product-service' Component={TechnologyProduct}/>
      </Routes>
    </div>
  )
}

export default Router
