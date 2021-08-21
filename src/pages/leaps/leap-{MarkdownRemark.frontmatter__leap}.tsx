import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Main from '../../layout/Main'
import FrontmatterTable from '../../components/FrontmatterTable'
import SourceIcon from '../../icons/Source'
import { LeapPageQuery } from '../../../types/gql'

interface Props {
  frontmatter__leap: number
  data: LeapPageQuery
}

const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Main>
      <Helmet title={`LEAP-${frontmatter.leap}: ${frontmatter.title}`} />
      <h1 className="page-heading">
        LEAP-{frontmatter.leap}: {frontmatter.title}{' '}
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
  query leapPage($frontmatter__leap: Int) {
    markdownRemark(frontmatter: { leap: { eq: $frontmatter__leap } }) {
      frontmatter {
        ...Frontmatter
      }
      html
    }
  }
`
