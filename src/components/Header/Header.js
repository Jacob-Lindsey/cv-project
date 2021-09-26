import React, { Component } from 'react';
import styled from 'styled-components';
import CreatePDFButton from '../CreatePDFButton/CreatePDFButton';

class Header extends Component {

    render() {
        return (
            <HeaderContainer>
                <HeaderFlex>
                    <HeaderTitle>
                        CV to PDF
                    </HeaderTitle>
                    <ButtonContainer>
                        <CreatePDFButton />
                    </ButtonContainer>
                </HeaderFlex>
            </HeaderContainer>
        )
    }
}


export default Header;

const HeaderContainer = styled.div`
    background-color: #19212c;
    border-bottom: 1px solid #e9e9e91c;
    margin-bottom: 3rem;
`;

const HeaderFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 8rem;
    max-width: 1800px;
    margin: 0 auto;
`;

const HeaderTitle = styled.div`
    font-size: 3rem;
    line-height: 2em;
    text-indent: 15px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 18%;
`;