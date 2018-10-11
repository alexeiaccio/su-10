import React from 'react'

import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'

const seo = {
  pageTitle: 'Welcome',
}

const IndexPage = ({ location }) => (
  <Layout>
    <Seo {...seo} pathname={location.pathname} />
    <h1>Cy-10</h1>
  </Layout>
)

export default IndexPage
