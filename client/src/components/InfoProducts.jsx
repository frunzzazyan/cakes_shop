import React from 'react'
import "./styles/InfoProducts.css"

const InfoProducts = () => {
  return (
    <>
        <div className="info-product">
            <h1 className="title">This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.</h1>
            <div className="info">
                <div className="text-info">
                    <h3>This is Schilers. Awesome Food Theme.
                    Purchase it and eat Burgers.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
                    <br />
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
                </div>
                <div className="image-info">
                    <img src="https://static.vecteezy.com/system/resources/previews/027/522/335/non_2x/birthday-cake-happy-birthday-cake-birthday-cake-transparent-background-ai-generative-free-png.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default InfoProducts