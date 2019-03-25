import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { transparentize } from 'polished'

const SWATCH_HEIGHT = '100px'
const SWATCH_WIDTH = '100px'

const shadowSingle = ({ theme }) => `
  box-shadow: 0 0 0 1px ${transparentize(0.98, theme.colors.main.black.rgb)},
    0 0 1px 0 ${transparentize(0.94, theme.colors.main.black.rgb)},
    0 2px 2px 0 ${transparentize(0.94, theme.colors.main.black.rgb)};
`

const Color = styled('div')`
  ${({ theme, rgb }) => css`
    width: ${SWATCH_HEIGHT};
    height: ${SWATCH_WIDTH};
    border-radius: 50%;
    background-color: ${rgb};
    margin: 20px 30px;
  `};
`

const ColorDescription = styled('div')`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.mega};
  `};
`

const ColorHex = styled('p')`
  ${({ theme, title }) => css`
    color: ${title.indexOf('of White') > -1
      ? theme.colors.shades.darkWhite.rgb
      : theme.colors.main.darkGrey.rgb};
  `};
`

const ColorTitle = styled('p')`
  ${({ theme, title }) => css`
    color: ${title.indexOf('of White') > -1 ? '#fff' : '#000'};
  `};
`

const ColorWrapper = styled('div')`
  ${({ theme, color }) => css`
    display: inline-block;
    margin-right: ${theme.spacings.mega};
    margin-bottom: ${theme.spacings.mega};
    border-bottom-left-radius: ${theme.borderRadius.giga};
    border-bottom-right-radius: ${theme.borderRadius.giga};
    background-color: ${color.title.indexOf('White') > -1
      ? color.title === 'White'
        ? '#EEF2F5'
        : '#4360DF'
      : '#fff'};
    ${shadowSingle({ theme })};
  `};
`

const Swatch = ({ color }) => (
  <ColorWrapper color={color}>
    <Color rgb={color.rgb} />
    <ColorDescription>
      <ColorTitle title={color.title}>{color.title}</ColorTitle>
      <ColorHex title={color.title}>{color.hex}</ColorHex>
    </ColorDescription>
  </ColorWrapper>
)

Swatch.propTypes = {
  color: PropTypes.object.isRequired,
}

export default Swatch
