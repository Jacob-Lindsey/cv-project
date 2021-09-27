import React, { useContext } from 'react'
import styled from 'styled-components'
import EditableLabel from 'react-inline-editing'
import AppContext from '../../AppContext'
import PreviewSection from './PreviewSection'
import Avatar from '../../assets/avatar.png'

const PreviewColumn = React.forwardRef((props, ref) => {
  const inputText = useContext(AppContext)

  function createLayoutFromData (section) {
    let formData
    if (section === 'education') {
      formData = [...inputText.educationSections]
      if (formData.length > 0) {
        return (
          <>
            {formData.map(function (item, index) {
              return (
                <SubmittedSection key={index}>
                  <SectionContent>
                    <DateText>
                      <EditableLabel
                        text={item.schoolStart}
                        inputWidth='100px'
                      />
                      &nbsp;&nbsp;-&nbsp;&nbsp;
                      <EditableLabel
                        text={item.schoolEnd}
                        inputWidth='100px'
                      />
                    </DateText>
                    <School>
                      <EditableLabel
                        text={item.schoolName}
                        inputWidth='160px'
                      />
                      ,&nbsp;&nbsp;
                      <EditableLabel
                        text={item.schoolCity}
                        inputWidth='120px'
                      />
                    </School>
                  </SectionContent>
                  <DegreeSubject>
                    <EditableLabel
                      text={item.schoolDegree}
                      inputWidth='140px'
                    />
                  </DegreeSubject>
                  <DegreeSubject>
                    <EditableLabel
                      text={item.schoolSubject}
                      inputWidth='190px'
                    />
                  </DegreeSubject>
                </SubmittedSection>
              )
            })}
          </>
        )
      }
    } else {
      formData = [...inputText.experienceSections]
      if (formData.length > 0) {
        return (
          <>
            {formData.map(function (item, index) {
              return (
                <SubmittedSection key={index}>
                  <SectionContent>
                    <ExperienceDate>
                      <EditableLabel
                        text={item.expStart}
                        inputWidth='100px'
                      />
                      &nbsp;&nbsp;-&nbsp;&nbsp;
                      <EditableLabel
                        text={item.expEnd}
                        inputWidth='100px'
                      />
                    </ExperienceDate>
                    <Position>
                      <EditableLabel
                        text={item.expPosition}
                        inputWidth='220px'
                      />
                    </Position>
                  </SectionContent>
                  <Company>
                    <EditableLabel
                      text={item.expCompany}
                      inputWidth='200px'
                      inputClassName="editing"
                    />
                    ,&nbsp;&nbsp;&nbsp;
                    <EditableLabel
                      text={item.expCity}
                      inputWidth='180px'
                    />
                  </Company>
                </SubmittedSection>
              )
            })}
          </>
        )
      }
    }
  }

  return (
    <PreviewColumnContainer ref={ref}>
      <PreviewHeader>
        <UserAvatar src={Avatar} />
        <HeaderContentContainer>
          <Name>
            {inputText.firstName} {inputText.lastName}
          </Name>
          <HeaderContent>
            <HeaderTextTitle>ADDRESS</HeaderTextTitle>
            <HeaderText>{inputText.address}</HeaderText>
            <HeaderTextTitle>PHONE NUMBER</HeaderTextTitle>
            <HeaderText>{inputText.phoneNumber}</HeaderText>
            <HeaderTextTitle>EMAIL</HeaderTextTitle>
            <HeaderText>{inputText.email}</HeaderText>
          </HeaderContent>
        </HeaderContentContainer>
      </PreviewHeader>

      <PreviewContent>
        <SectionContainer>
          <SectionTitle>Education</SectionTitle>
          <SectionDivider />
          {createLayoutFromData('education')}
          <PreviewSection requestedSection='education' />
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Experience</SectionTitle>
          <SectionDivider />
          {createLayoutFromData('experience')}
          <PreviewSection requestedSection='experience' />
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Personal Info</SectionTitle>
          <SectionDivider />
          <PersonalInfoText>{inputText.description}</PersonalInfoText>
        </SectionContainer>
      </PreviewContent>
    </PreviewColumnContainer>
  )
})

export default PreviewColumn

const PreviewColumnContainer = styled.div`
  display: grid;
  gap: 0.5rem 0px;
  grid-template-columns: 1fr;
  grid-template-rows: 290px minmax(1fr, auto);
`

const PreviewHeader = styled.div`
  background-color: #253c5fd7;
  border-bottom: 4px solid #060d18b7;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  padding: 1rem;
`

const UserAvatar = styled.img`
  padding: 1rem;
  width: 100%;
  margin: auto 0;
  opacity: 0.6;
`

const HeaderContentContainer = styled.div`
  display: grid;
  gap: 2px 0px;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 1fr;
`

const Name = styled.p`
  color: rgb(229,229,229);
  font-family: 'Montserrat';
  font-size: 2.5rem;
  font-weight: 900;
  text-indent: 1%;
  margin-bottom: 1%;
`

const HeaderContent = styled.div`
  display: grid;
  gap: 1px 0px;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7rem 3.2rem 0.7rem 3.2rem 0.7rem 3.2rem 0.2fr;
  margin: 0 auto;
  width: 95%;
`

const HeaderTextTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 900;
  font-style: italic;
`

const HeaderText = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  height: 2.1rem;
  line-height: 2.5rem;
  margin: 0 auto;
  min-width: 100%;
`

const PreviewContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
`

const SectionContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  max-width: 768px;
  min-height: 162px;
`

const SectionDivider = styled.hr`
  color: #b7b9bdc2;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  width: 96%;
  opacity: 0.7;
`

const SectionTitle = styled.h2`
  font-style: italic;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-indent: 1.4rem;
`

const SubmittedSection = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  gap: 10px;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  background-color: #253c5f52;
  min-height: 126px;
  margin-bottom: 10px;
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
  & input {
    background-color: #19212c;
    text-align: center;
  }
`

const Position = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  height: 2.1rem;
  line-height: 2.5rem;
  margin: 0 auto;
  min-width: 100%;
  text-align: right;
  & input {
    background-color: #19212c;
    text-align: center;
  }
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
  & input {
    background-color: #19212c;
    font-size: 1.1rem;
    text-align: center;
  }
`

const DateText = styled.div`
  display: flex;
  font-weight: 600;
  & input {
    background-color: #19212c;
    text-align: center;
  }
`

const School = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.3rem;
  height: 2.1rem;
  line-height: 2.5rem;
  margin: 0 auto;
  min-width: 100%;
  & input {
    background-color: #19212c;
    font-size: 1.1rem;
    text-align: center;
  }
`

const DegreeSubject = styled.div`
  min-width: 100%;
  height: 2.1rem;
  line-height: 2.5rem;
  margin: 0 auto;
  font-size: 1.3rem;
  text-align: right;
  & input {
    background-color: #19212c;
    font-size: 1.1rem;
    text-align: center;
  }
`

const PersonalInfoText = styled.p`
  margin-top: 0.3rem;
  padding: 1rem;
  word-wrap: break-word;
`
