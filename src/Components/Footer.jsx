import React from 'react'
import styled from 'styled-components';
function Footer() {
  return (
    <PiePag>
        <nav>
            <ul>
                <li><a href="https://www.instagram.com/luis_tang11/" rel='noopener noreferrer'>Instagram</a></li>
            </ul>
        </nav>
    </PiePag>
  )
}
 const PiePag=styled.footer`
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-evenly;
 `

export default Footer