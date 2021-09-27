import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../AppContext'


const PreviewSection = ({ requestedSection }) => {
  const inputText = useContext(AppContext)

  const educationSection = (
    <SectionWrapper>
      <SectionContent>
        <DateText>
          {inputText.schoolStart}&nbsp;&nbsp;-&nbsp;&nbsp;{inputText.schoolEnd}
        </DateText>
        <School>
          {inputText.schoolName},&nbsp;&nbsp;{inputText.schoolCity}
        </School>
      </SectionContent>
      <DegreeSubject>{inputText.schoolDegree}</DegreeSubject>
      <DegreeSubject>{inputText.schoolSubject}</DegreeSubject>
    </SectionWrapper>
  )

  const experienceSection = (
    <SectionWrapper>
      <SectionContent>
        <ExperienceDate>
          {inputText.expStart}
          &nbsp;&nbsp;-&nbsp;&nbsp;
          {inputText.expEnd}
        </ExperienceDate>
        <Position>{inputText.expPosition}</Position>
      </SectionContent>
      <Company>
        {inputText.expCompany},&nbsp;&nbsp;&nbsp;{inputText.expCity}
      </Company>
    </SectionWrapper>
  )

  const section =
    requestedSection === 'education' ? educationSection : experienceSection

  return section
}

export default PreviewSection

const SectionWrapper = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  gap: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
`

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
  min-width: 100%;
  height: 2.1rem;
  line-height: 2.5rem;
  margin: 0 auto;
`

const ExperienceDate = styled.div`
  display: flex;
  font-weight: 600;
  font-style: italic;
`

const Position = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  height: 2.1rem;
  line-height: 2.5rem;
  margin: 0 auto;
  min-width: 100%;
  text-align: right;
`

const Company = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.3rem;
  height: 2.1rem;
  line-height: 2.5rem;
  margin: 0 auto;
  min-width: 100%;
  text-align: right;
`

const DateText = styled.div`
  display: flex;
  font-weight: 600;
  font-style: italic;
`

const School = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.3rem;
  font-weight: 600;
  height: 2.1rem;
  line-height: 2.5rem;
  margin: 0 auto;
  min-width: 100%;
`

const DegreeSubject = styled.div`
  min-width: 100%;
  height: 2.1rem;
  line-height: 2.5rem;
  margin: 0 auto;
  font-size: 1rem;
  text-align: right;
`