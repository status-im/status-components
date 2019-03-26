import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

// HOC
import withGlobalStyles from '../withGlobalStyles'

const Header = styled('div')`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.xl};
    line-height: ${theme.lineHeights.normal};
    margin-bottom: ${theme.spacings.giga};
  `};
`

const TitleBold = styled('div')`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.l};
    line-height: ${theme.lineHeights.normal};
    margin-bottom: ${theme.spacings.giga};
  `};
`

const Title = styled('div')`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.l};
    line-height: ${theme.lineHeights.normal};
    margin-bottom: ${theme.spacings.giga};
  `};
`

const MainMedium = styled('div')`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.semi};
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.normal};
    margin-bottom: ${theme.spacings.giga};
  `};
`

const Main = styled('div')`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.normal};
    margin-bottom: ${theme.spacings.giga};
  `};
`

const Caption = styled('div')`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.normal};
    margin-bottom: ${theme.spacings.giga};
  `};
`

const Timestamp = styled('div')`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.normal};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: ${theme.spacings.giga};
  `};
`

class Typography extends React.Component {
  render() {
    return (
      <>
        <Header>Header</Header>
        <TitleBold>Title Bold</TitleBold>
        <Title>Title</Title>
        <MainMedium>Main Medium</MainMedium>
        <Main>Main</Main>
        <Caption>Caption</Caption>
        <Timestamp>Timestamp</Timestamp>
      </>
    )
  }
}

export default withGlobalStyles(Typography)
