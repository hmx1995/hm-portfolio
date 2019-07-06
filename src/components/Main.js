import React from 'react'
import PropTypes from 'prop-types'
import "react-step-progress-bar/styles.css"
import { ProgressBar, Step } from 'react-step-progress-bar'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          {/* <span className="image main"><img src={pic01} alt="" /></span> */}
          <p>Student of Computer Science at Kings College London, Working towards a 1st. My interests lie in the field of Blockchain, Webdev, Mobile Dev and CyberSecuirty.</p>
          <p>I am active in the Blockchain scene, being a Core Developer at KCL Blockchain. With our team placing in podium position during the R3 Global Pitch competition. The competition being the likes of Oxford, Stamford, NYU and Imperial</p>
          <p>I enjoy freelancing WebApp Development to increase my knowledge and sharpen my programming skill set. Check out my <a href="https://github.com/CodeForMMA" target="_blank">Github</a> for my previous projects, a lot more to come!</p>
          <h3 className="major">Skills</h3>
          <h4>HTML5/CSS3/SCSS</h4>
            <span>
              <ProgressBar percent={90} filledBackground="linear-gradient(to right, #000000, #ffffff)"/>
            </span>
            <br />
          <h4>JavaScript (React/Node/Gatsby)</h4>
            <span>
              <ProgressBar percent={75} filledBackground="linear-gradient(to right, #000000, #ffffff)"/>
            </span>
            <br />
          <h4>Java</h4>
            <span>
              <ProgressBar percent={70} filledBackground="linear-gradient(to right, #000000, #ffffff)"/>
            </span>
            <br />
          <h4>Python</h4>
            <span>
              <ProgressBar percent={60} filledBackground="linear-gradient(to right, #000000, #ffffff)"/>
            </span>
            <br />
          <h4>SQL (MySQL)</h4>
            <span>
            <ProgressBar percent={60} filledBackground="linear-gradient(to right, #000000, #ffffff)"/>
            </span>
            <br />
          <h4>GraphQL</h4>
            <span>
            <ProgressBar percent={55} filledBackground="linear-gradient(to right, #000000, #ffffff)"/>
            </span>
            <br />
          <h4>Kali Linux</h4>
            <span>
              <ProgressBar percent={50} filledBackground="linear-gradient(to right, #000000, #ffffff)"/>
            </span>
            <br />
          <h4>Corda</h4>
            <span>
              <ProgressBar percent={40} filledBackground="linear-gradient(to right, #000000, #ffffff)"/>
            </span>
          {close}
        </article>

        <article id="project" className={`${this.props.article === 'project' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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

      </div>
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