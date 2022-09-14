import React from 'react';
import {Routes, Route} from "react-router-dom";

//pages
import { Home, About, Contact, NotFound, Knowledge, Projects } from '../pages';

//cpmponents
import {Navigation, Footer}  from '../components';


function App() {
  return (
    <>
    <Navigation/>
    <Routes >
      <Route index element={<Home />} />
      <Route path='Projects' element={<Projects hasHeading={true}/>} />
      <Route path='Knowledge' element={<Knowledge hasHeading={true}/>} />
      <Route path='Contact' element={<Contact hasHeading={true}/>} />
      <Route path='About' element={<About hasHeading={true} />} />
      <Route path='personal-portfolio' element={<Home  />} />
      <Route path='*' element={<NotFound  />} />
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;




export const IAPP = () => {
  return (
    <div>IAPP</div>
  )
}
