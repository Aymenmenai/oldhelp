import Main from '../components/main/main'
import { AppSection } from '../components/section/app-section'
import { Section } from '../components/section/section'
import Skull from '../components/icons/skull'
import Earth from '../components/icons/earth'
import Developer from '../components/icons/developer'
import { changeLanguage } from '../components/app/language'

export default function Home() {
  const language = changeLanguage('english')
  // console.log(language)
  return (<div>
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
   
  </div>
   
  )
}
