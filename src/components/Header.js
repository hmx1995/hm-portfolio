import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-globe"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Mansour Jalaly</h1>
            <TypistLoop interval={500}>
                {[
                    'Software Developer ',
                    'Blockchain Specialist ',
                    'BJJ White Belt ',
                ].map(text => 
                    <Typist startDelay={250}
                    cursor={{show:true, element:'▎'}}>
                    {text}
                    <Typist.Delay ms={500} />
                    <Typist.Backspace count={text.length}/>
                  </Typist>)}
              </TypistLoop>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
