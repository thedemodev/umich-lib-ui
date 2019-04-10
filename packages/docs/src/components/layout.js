import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {
  GlobalStyleSheet,
  COLORS,
  MEDIA_QUERIES,
} from '@umich-lib/core'

import Logo from './logo'

const Root = styled('div')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    minHeight: '100vh'
  }
})

const Side = styled('div')({
  display: 'block',
  minHeight: '100vh',
  minWidth: '250px',
  order: '-1',
  borderRight: `solid 2px ${COLORS.neutral[100]}`
})

const Main = styled('main')({
  width: '100%'
})

const Layout = (props) => (
  <>
    <GlobalStyleSheet />
    <Root>
      <Main>
        {props.children}
      </Main>
      <Side>
        <Logo />
      </Side>
    </Root>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
