import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <a href="https://www.linkedin.com/in/hassan-mustafa-4679b71a8/" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Hassan Mustafa</h1>
                <TypistLoop interval={500}>
                    {[
                        'BUL Graduate ',
                        'Software Engineer ',
                        'Web Developer ',
                        'Free Thinker ',
                    ].map(text =>
                        <Typist startDelay={700}
                            cursor={{show: true, element: '▎'}}>
                            {text}
                            <Typist.Delay ms={500} />
                            <Typist.Backspace count={text.length} />
                        </Typist>)}
                </TypistLoop>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('project')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('blog')}}>Blog</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li> */}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
