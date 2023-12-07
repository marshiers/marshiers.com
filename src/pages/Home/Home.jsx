import './Home.scss'
import YearUnitUpdate from '../../functions/YearUnitUpdate'
import TitlePhonemic from '../../components/TitlePhonemic/TitlePhonemic'
import { useEffect, useRef } from 'react'
// import { motion } from "framer-motion"

function Home() {

  // Attributes a ref to the year part in the description, and calls a function upon mounting of the component on page load to change it to the appropriate text.
  const personalDescriptorRef = useRef(null);

  useEffect(() => {
    YearUnitUpdate(personalDescriptorRef);
  }, []);

  return (
    <div className='view'>
        <TitlePhonemic text="marshiers." level="title" phonemic="ˈmɑrʃiə˞z"></TitlePhonemic>
        <p><span ref={personalDescriptorRef}>Computer science student</span> and self-taught web developer based out of Sydney, Australia.</p>
    </div>
  )
}

export default Home
