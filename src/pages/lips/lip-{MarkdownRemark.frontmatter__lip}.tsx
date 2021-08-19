import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Main from '../../layout/Main'
import FrontmatterTable from '../../components/FrontmatterTable'
import SourceIcon from '../../icons/Source'
import { LipPageQuery } from '../../../types/gql'

interface Props {
  frontmatter__lip: number
  data: LipPageQuery
}

const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Main>
      <Helmet title={`LIP-${frontmatter.lip}: ${frontmatter.title}`} />
      <h1 className="page-heading">
        LIP-{frontmatter.lip}: {frontmatter.title}{' '}
        <a href="#" className="inline-block">
          <SourceIcon />
        </a>
      </h1>
      <FrontmatterTable frontmatter={frontmatter} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Main>
  )
}

export default Template

export const pageQuery = graphql`
  query lipPage($frontmatter__lip: Int) {
    markdownRemark(frontmatter: { lip: { eq: $frontmatter__lip } }) {
      frontmatter {
        ...Frontmatter
      }
      html
    }
  }
`
