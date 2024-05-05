import Navbar from "../components/navbar/Navbar"
import Banner from "../components/banner/banner"
import Footer from "../components/footer/Footer"
import {StepOne,StepFive,StepFour,StepThree,StepTwo} from "../components/multiStep/Multistep"

const Home = () => {
  return (
    <>
    <Navbar/>
   <Banner/>
   <StepOne/>
   <StepTwo/>
   <StepThree/>
   <StepFour/>
   <StepFive/>
  
    <Footer/>
    </>
  )
}
export default Home;
