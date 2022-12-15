import { dataSkills } from '../skills/dataSkills'



export const selectorType = (value) => {
    return dataSkills.map(({ desc, color }) => { 
        return value === desc ? color : null ;
    }
    )
}