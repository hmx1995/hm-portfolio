import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>You've found the secret page!</h1>
    <p>This page is still under construction! :s</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
