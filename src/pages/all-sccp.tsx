import React from 'react'
import { graphql } from 'gatsby'
import { sortBy, filter, flow, reject } from 'lodash/fp'

import statuses from '../utils/statuses'
import { AllSccpQuery } from '../gql'
import Main from '../layout/Main'
import { StatusTable } from '../components/StatusTable'
import { StatusLabel } from '../components/StatusLabel'

interface Props {
  data: AllSccpQuery
}

const Template: React.FC<Props> = ({ data: { allMarkdownRemark } }) => {
  const { group } = allMarkdownRemark

  const columns = flow(
    filter(({ fieldValue }) => statuses.indexOf(fieldValue) > -1),
    sortBy(({ fieldValue }) => statuses.indexOf(fieldValue)),
  )(group) as AllSccpQuery['allMarkdownRemark']['group']

  return (
    <Main>
      <header className="post-header">
        <h1 className="post-title">All SCCPs</h1>
      </header>
      <div className="post-content">
        {columns.map((g) => {
          const rows = flow(
            reject({ frontmatter: { sccp: null } }),
            sortBy('frontmatter.sccp'),
          )(g.nodes)
          return (
            <div key={g.fieldValue}>
              <StatusLabel label={g.fieldValue} />
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
  query allSccp {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sccp/" } }) {
      group(field: frontmatter___status) {
        fieldValue
        nodes {
          id
          frontmatter {
            sccp
            title
            created
            author
          }
        }
      }
    }
  }
`
