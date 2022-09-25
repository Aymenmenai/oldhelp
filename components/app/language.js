// DATA
import english from '../database/english.json'
import arabic from '../database/arabic.json'
import french from '../database/french.json'
import hungarian from '../database/hungarian.json'

const changeLanguage = (lang)=>{
    switch(lang){
        case 'english':
            return english[0]
        case 'العربية':
            return arabic[0]
        case 'français':
            return french[0]
        case 'magyar':
            return hungarian[0]
        default:
            return english[0]
    }
}

export default changeLanguage