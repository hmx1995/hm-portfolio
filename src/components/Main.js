import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-grid-system'
import SlideToggle from "react-slide-toggle"
import "react-step-progress-bar/styles.css"
import {ProgressBar} from 'react-step-progress-bar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTerminal, faCode, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import {faBtc, faGithub} from '@fortawesome/free-brands-svg-icons'

import {Link} from "gatsby"


class Main extends React.Component {
    render() {
        let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

        return (
            <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

                <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ?
                    'timeout' : ''}`} style={{display: 'none'}}> <h2 className="major">Intro</h2> {/* <span className="image main"><img src={pic01} alt="" /></span> */}

          <p>
            Graduate in Computer Systems Engineering from Brunel University London.
          </p>
          <p>
          I am a highly motivated and hardworking individual who is mechanically minded with a 
          very methodical approach to working. I am keen to learn and develop my skills and enhance them 
          further within a practical setting. I have a flexible approach to problem-solving and strong 
          attention to detail. I enjoy working with all forms of technology, software and digital apps. 
          </p>

          <h3 className="major">Skills</h3>
                    <h4>Javascript</h4>
                    <span>
                        <ProgressBar percent={90} filledBackground="linear-gradient(to right, red, orange, green)" />
                    </span>
                    <br />
                    <h4>Java</h4>
                    <span>
                        <ProgressBar percent={90} filledBackground="linear-gradient(to right, red, orange, green)" />
                    </span>
                    <br />
                    <h4>HTML5/CSS3/SCSS</h4>
                    <span>
                        <ProgressBar percent={90} filledBackground="linear-gradient(to right, red, orange, green)" />
                    </span>
                    <br />
                    <h4>Python</h4>
                    <span>
                        <ProgressBar percent={80} filledBackground="linear-gradient(to right, red, orange, green)" />
                    </span>
                    <br />
                    <h4>C/C++</h4>
                    <span>
                        <ProgressBar percent={75} filledBackground="linear-gradient(to right, red, orange, green)" />
                    </span>
                    <br />
                    <h4>SQL (MySQL)</h4>
                    <span>
                        <ProgressBar percent={70} filledBackground="linear-gradient(to right, red, orange, green)" />
                    </span>
                    {close}
                </article>

                <article id="project" className={`${this.props.article === 'project' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}>
                    <h2 className="major">Projects</h2>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <center>
                                    <p>
                                       Please find my projects listed below:  
</p>
                                </center>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={16}>
                                <div className="icon">
                                    <center>
                                        <a href="https://github.com/hmx1995" target="_blank" rel="noopener noreferrer" className="icon">
                                            <FontAwesomeIcon icon={faGithub} size={"4x"} />
                                        </a>
                                    </center>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <center>
                                    <br />
                                    <h4>App Development</h4>
                                    <SlideToggle
                                        collapsed={true}
                                        render={({onToggle, setCollapsibleElement, progress}) => (
                                            <div className="my-collapsible">
                                                <button className="my-collapsible__toggle" onClick={onToggle}>
                                                    <FontAwesomeIcon icon={faTerminal} size={"lg"} />
                                                </button>
                                                <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                                    <div className="my-collapsible__content-inner" style={{opacity: Math.max(0.1, progress)}}>
                                                        <br />
                                                        Development Coming Soon!
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                </center>
                            </Col>
                            <Col sm={6}>
                                <center>
                                    <br />
                                    <h4>Web Development</h4>
                                    <SlideToggle
                                        collapsed={true}
                                        render={({onToggle, setCollapsibleElement, progress}) => (
                                            <div className="my-collapsible">
                                                <button className="my-collapsible__toggle" onClick={onToggle}>
                                                    <FontAwesomeIcon icon={faCode} size={"lg"} />
                                                </button>
                                                <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                                    <div className="my-collapsible__content-inner" style={{opacity: Math.max(0.1, progress)}}>
                                                        <br />
                                                        <a href="https://github.com/hmx1995" target="_blank" rel="noopener noreferrer">
                                                            Gatsby Site (React, GraphQL Stack)
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    />
                                </center>
                            </Col>
                            
                        </Row>
                    </Container>
                    {close}
                </article>

                <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}>
                    <h2 className="major">Blog</h2>
                    <div>
                        <h4>
                        “I'd rather attempt to do something great and fail then to attempt to do anothing and succeed.”
                        </h4>
                        <center><h5 align="right"> - Robert H schuller</h5></center>
                    </div>
                    <div>
                        <center><button><a href="/blog1" rel="noopener noreferrer"><FontAwesomeIcon icon={faSignInAlt} size={"lg"} /></a></button></center>
                        <br />
                        <center><h6> Press to Enter Blog </h6></center>
                    </div>

                    {close}
                </article>

                <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}>
                    <h2 className="major">Contact</h2>
                    <form method="post" action="#">
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="4"></textarea>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" className="special" /></li>
                            <li><input type="reset" value="Reset" /></li>
                        </ul>
                    </form>
                    <ul className="icons">
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
                    </ul>
                    {close}
                </article>

            </div >
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main
