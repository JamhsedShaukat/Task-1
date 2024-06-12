
import { icon } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import Connect from './components/Connect';
import NavBar from './components/NavBar';
import SectionB2B from './components/sections/SectionB2B';
import SectionChoseUs from './components/sections/SectionChoseUs';
import SectionMarket from './components/sections/SectionMarket';
import SectionSpecial from './components/sections/SectionSpecial';
import TestimonialCarousel from './components/sections/Testimonial';
import Form from './components/sections/Form';
import Footer from './components/sections/Footer';

const SectionSpecialData ={
  p:"What we offers?",
  heading:"Specialize, Not",
  highlight:"Generalize",
  specialCard:[
    {
    icon:"fas fa-graduation-cap",
    h2:"RTO",
    para:"Engage students & boost enrollments with targeted RTO email marketing. We craft campaigns that convert."
  },
    {
    icon:"fas fa-chart-line",
    h2:"SAAS",
    para:"Businesses of all sizes, but with a focus on small and medium-sized businesses (SMBs) that are looking to grow their customer base and revenue."
  },
    {
    icon:"fas fa-user-graduate",
    h2:"Education",
    para:"Generate more leads, convert more enrollments."
  },
    {
    icon:"fas fa-cogs",
    h2:"Digi Marketing",
    para:"Leveraging AI to create dynamic and creative content, utilizing generative algorithms to produce innovative and unique materials, from text to multimedia."
  },
    {
    icon:"fas fa-shopping-cart",
    h2:"E-commerce",
    para:"Turn clicks into customers with personalized email campaigns. Boost sales & engagement for your online store."
  },
    {
    icon:"fas fa-handshake",
    h2:"Financial Services",
    para:"Grow trust, build relationships, and boost engagement. Powerful email strategies for financial services."
  }
  
]
};
 
const EveryThingData ={
  p:"What we offers?",
  headingPart1:"Everything",
  headingPart2:",Nothing You Dont",
  highlight:" You Need",
  specialCard:[
    {
    icon:"fas fa-graduation-cap",
    h2:"B2B Marketing",
    para:"Engage students & boost enrollments with targeted RTO email marketing. We craft campaigns that convert",
  },
    {
    icon:"fas fa-chart-line",
    h2:"High Growth",
    para:"Businesses of all sizes, but with a focus on small and medium-sized businesses (SMBs) that are looking to grow their customer base and revenue."
  },
    {
    icon:"fas fa-user-graduate",
    h2:"Meta Advertising",
    para:"Generate more leads, convert more enrolments."
  },
    {
    icon:"fas fa-cogs",
    h2:"Email Marketing",
    para:"Leveraging AI to create dynamic and creative content, utilizing generative algorithms to produce innovative and unique materials, from text to multimedia."
  },
    {
    icon:"fas fa-shopping-cart",
    h2:"Social Media Market",
    para:"Turn clicks into customers with personalized email campaigns. Boost sales & engagement for your online store."
  },
    {
    icon:"fas fa-handshake",
    h2:"Google Ads",
    para:"Grow trust, build relationships, and boost engagement. Powerful email strategies for financial services."
  }
  
]
}; 


function App() {
  return (
    <>
   <NavBar></NavBar>
   <Connect></Connect>
   <SectionB2B></SectionB2B>
   <SectionMarket></SectionMarket>
   <SectionSpecial data = {SectionSpecialData} ></SectionSpecial>
   <SectionChoseUs></SectionChoseUs>
   <SectionSpecial data = {EveryThingData} ></SectionSpecial>
   <TestimonialCarousel></TestimonialCarousel>
   <Form></Form>
   <Footer></Footer>
   </>
  );
}

export default App;
