import React, {Fragment} from "react"
import {Styled} from "theme-ui"
export default function BioContent() {
    return (
        <Fragment>
            Written by <Styled.a href="https://www.linkedin.com/in/hassan-mustafa-4679b71a8/" target="_blank" rel="noopener_noreferrer">Hassan</Styled.a>.
            <br />
            "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. Twenty-six times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed".
            <i> - Micheal Jordan </i>
        </Fragment>
    )
}


