import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>My name is Yongjin.</h2>
      <p>
        Need a developer? <Link to="/about">Contact me.</Link>
      </p>
    </Layout>
  )
}
