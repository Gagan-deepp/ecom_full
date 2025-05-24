import React from 'react'
import NavBar from './NavBar'

const FileStructure = ({ children }) => {
    return (
        <>
            <NavBar/>

            <main>
                {children}
            </main>

            <footer>
              <Fd/>
            </footer>
        </>
    )
}

export default FileStructure