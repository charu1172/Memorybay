import React from 'react'
import image from './memory.png'
function Homepage() {
    return (
        <div class="w3-row">
        <div class="w3-half w3-black w3-container w3-center" style={{height:'700px'}}>
          <div class="w3-padding-64">
          </div>
          <div class="w3-padding-64">
            <a href="/signup" class="w3-button w3-black w3-block w3-hover-blue-grey w3-padding-16">Sign up</a>
            <a href="/login" class="w3-button w3-black w3-block w3-hover-teal w3-padding-16">Log in</a>
          </div>
        </div>
        <div class="w3-half w3-blue-grey w3-container" style={{height:'700px'}}>
          <div class="w3-padding-64 w3-center">
            <h1>About MemoryBay</h1>
            <img src={image} class="w3-margin w3-circle" alt="Person" style={{width:'50%'}}/>
            <div class="w3-left-align w3-padding-large">
              <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
              <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Homepage
