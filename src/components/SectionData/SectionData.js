import { useContext } from 'react';
import AppContext from '../../AppContext';

const SectionData = (section) => {

  const dataContext = useContext(AppContext);
  
  const addEducationData = () => {
      console.log('education data added');
  }
  
  const addExperienceData = () => {
      console.log('experience data added');
  }

  if (section === 'education') {
    let formattedData = {
        schoolStart: dataContext.schoolStart,
        schoolEnd: dataContext.schoolEnd,
        schoolName: dataContext.schoolName,
        schoolCity: dataContext.schoolCity,
        schoolDegree: dataContext.schoolDegree,
        schoolSubject: dataContext.schoolSubject
    }
    return addEducationData();
        
  } else {
      let formattedData = {
          expPosition: dataContext.expPosition,
          expCompany: dataContext.expCompany,
          expCity: dataContext.expCity,
          expStart: dataContext.expStart,
          expEnd: dataContext.expEnd
      }
      return addExperienceData();
  }
}

export default SectionData;

