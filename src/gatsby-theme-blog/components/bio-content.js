import React, {Fragment} from "react"
import {Styled} from "theme-ui"
export default function BioContent() {
    return (
        <Fragment>
            Words by <Styled.a href="http://example.com/">Your Name</Styled.a>.
            <br />
      Change me. Your awesome bio, about how great you are!
        </Fragment>
    )
}
