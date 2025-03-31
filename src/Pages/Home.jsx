import React from 'react'
import Hero from '../Components/Hero'
import Companies from '../Components/Companies'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import EmailSubscription from '../Components/EmailSubscription'
const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Services />
      <EmailSubscription />
      <Footer />
    </div>
  )
}

export default Home