import React from 'react'
import { graphql } from 'gatsby'
import { sortBy, filter, flow, reject } from 'lodash/fp'

import statuses from '../utils/statuses'
import { AllSipsQuery } from '../gql'
import Main from '../layout/Main'
import { StatusTable } from '../components/StatusTable'

interface Props {
  data: AllSipsQuery
}

const Template: React.FC<Props> = ({ data: { allMarkdownRemark } }) => {
  const { group } = allMarkdownRemark

  const columns = flow(
    filter(({ fieldValue }) => statuses.indexOf(fieldValue) > -1),
    sortBy(({ fieldValue }) => statuses.indexOf(fieldValue)),
  )(group) as AllSipsQuery['allMarkdownRemark']['group']

  return (
    <Main>
      <header className="post-header">
        <h1 className="post-title">All SIPs</h1>
      </header>
      <div className="post-content">
        {columns.map((g) => {
          const rows = flow(
            reject({ frontmatter: { sip: null } }),
            sortBy('frontmatter.sip'),
          )(g.nodes)
          return (
            <div key={g.fieldValue}>
              <h2>{g.fieldValue}</h2>
              <StatusTable rows={rows as any} />
            </div>
          )
        })}
      </div>
    </Main>
  )
}

export default Template

export const pageQuery = graphql`
  query allSips {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sips/" } }) {
      group(field: frontmatter___status) {
        fieldValue
        nodes {
          id
          frontmatter {
            sip
            title
            created
            author
          }
        }
      }
    }
  }
`
