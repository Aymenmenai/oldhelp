import Main from '../../builds/home/main/main'
import { AppSection } from '../../builds/home/section/app-section'
import { Section } from '../../builds/home/section/section'
import Skull from '../../icons/skull'
import Earth from '../../icons/earth'
import Developer from '../../icons/developer'

const Home =(props) =>{
  const language = props.lang
  // console.log(language)
  return (<>
    <Main lang={language.main}/>
    <AppSection lang={language.app}/>
    <Section style={'md:flex-row'} lang={language.earth}>
      <Earth/>
    </Section>
    <Section style={'md:flex-row-reverse'} lang={language.skull}>
      <Skull/>
    </Section >
    <Section style={'md:flex-row'} lang={language.developer}>
      <Developer/>
    </Section>
   
  </>
   
  )
}

export default Home