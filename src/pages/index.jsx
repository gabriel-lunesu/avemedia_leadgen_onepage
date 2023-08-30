import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/OnePage/Header';
import About from '@/components/OnePage/About';
import Marq from '@/components/OnePage/Marq';
import Services from '@/components/OnePage/Services';
import Portfolio from '@/components/OnePage/Portfolio';
import Intro from '@/components/OnePage/Intro';
import Testimonials from '@/components/OnePage/Testimonials';
import ImageSection from '@/components/OnePage/Image';
import Team from '@/components/OnePage/Team';
import Blog from '@/components/OnePage/Blog';
import Contact from '@/components/OnePage/Contact';
import Footer from '@/components/OnePage/Footer';
import ContactForm from '@/components/OnePage/Contactform';



function HomeOnePage() {
  useEffect(() => {
    document.body.classList.add('sub-bg');
    return () => document.body.classList.remove('sub-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Ave Media - Lead Generation in the UAE!</title>
          <meta name="description" content="Strategically based in the UAE, Ave Media specializes in high-impact lead generation in Dubai and the UAE. Our dedicated team harnesses the power of technology and local market insights to connect businesses with their ideal prospects. Choose Ave Media for growth-driven results tailored to the Middle Eastern audience." />
          <meta property="og:title" content="Ave Media - Premium Lead Generation." />
          <meta property="og:description" content="You're Agency For The Best Leads! Ave Media." />
          <meta property="og:url" content="https://avemedia.business/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        
      </Head>

      

      <Loader />
      <LinesTwo />
      {/* <Navbar curve noStatic /> */}
      <main className="main-bg">
        <Header />
        <About />
        <Marq />
        <Services />
        {/* <Portfolio /> */}
        <Intro />
        {/* <Testimonials />
        <ImageSection /> */}
        {/* <Team /> */}
        {/* <Blog /> */}
        <Contact />
        
      </main>
      {/* <Footer /> */}
    </>
  )
}

HomeOnePage.getLayout = page => <Layout>{page}</Layout>

export default HomeOnePage;

