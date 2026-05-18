import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import ProfessionalWork from '../components/Projects'
import Workflow from '../components/Workflow'
import SelectedOutcomes from '../components/SelectedOutcomes'
import TechStack from '../components/TechStack'
import Experience from '../components/Experience'
import About from '../components/About'
import Socials from '../components/Socials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Experience />
        <Workflow />
        <ProfessionalWork />
        <SelectedOutcomes />
        <About />
        <Socials />
        <FAQ />
        <Contact />
      </main>
    </div>
  )
}

export default HomePage
