const { basename } = require('path')

module.exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = basename(node.fileAbsolutePath, '.md')
    console.log(slug)

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
