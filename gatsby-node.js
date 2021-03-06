const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const pageMaker = (type, data) => {
    data.map(({ node }) => {
      const { uid } = node
      createPage({
        component: path.resolve(`src/templates/${type}.js`),
        context: {
          uid,
        },
        path: uid,
      })
      return false
    })
  }

  const pages = await graphql(`
    {
      products: allPrismicProduct {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  pageMaker('product', pages.data.products.edges)
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-emotion',
  })
  actions.setBabelPlugin({
    name: 'babel-plugin-tailwind',
  })
}

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    entry: 'whatwg-fetch',
  })
}
