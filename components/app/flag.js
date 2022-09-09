import English from '../icons/flags/english'
import French from '../icons/flags/french'
import Arabic from '../icons/flags/arabic'
import Hungarian from '../icons/flags/hungarian'

export const setFlag = (flag)=>{
    switch(flag){
        case 'english':
            return <English/>
        case 'العربية':
            return <Arabic/>
        case 'français':
            return <French/>
        case 'magyar':
            return <Hungarian/>
        default:
            return <English/>
    }
}