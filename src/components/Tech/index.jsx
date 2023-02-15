import React, { useContext } from 'react'
import { TechContext } from '../../Providers/TechContext';
import StyledTech from './style'

 const Tech = ({children, tech}) => {

  const { setTechEdit, setModal } = useContext(TechContext)

  const handleModalEditTech = (tech) => {
    setTechEdit(tech);
    setModal("editTech");
  };

  return (
    <StyledTech onClick={() => handleModalEditTech(tech)}>
        {children}
    </StyledTech>
  )
}

export default Tech
