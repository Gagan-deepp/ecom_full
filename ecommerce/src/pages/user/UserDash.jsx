import React from 'react'
import FileStructure from '../../Components/FileStructure'
import UserMenu from './UserMenu'
import styled from 'styled-components'

const UserDash = ({children}) => {
    return (
        <FileStructure>
            <UserMenuDiv>
                <UserMenu />
                {children}
            </UserMenuDiv>
        </FileStructure>
    )
}

export default UserDash

const UserMenuDiv = styled.div`
    min-height:inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
`