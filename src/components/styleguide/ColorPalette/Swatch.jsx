import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { transparentize } from 'polished'

const SWATCH_SIZE = '100px'

const shadowSingle = ({ theme }) => `
  box-shadow: 0 0 0 1px ${transparentize(0.98, theme.colors.main.black.rgb)},
    0 0 1px 0 ${transparentize(0.94, theme.colors.main.black.rgb)},
    0 2px 2px 0 ${transparentize(0.94, theme.colors.main.black.rgb)};
`

const Color = styled('div')`
  ${({ theme, rgb }) => css`
    width: ${SWATCH_SIZE};
    height: ${SWATCH_SIZE};
    border-radius: 50%;
    background-color: ${rgb};
  `};
`

const ColorDescription = styled('div')`
  ${({ theme }) => css`
    padding: 0;
  `};
`

const ColorRGB = styled('p')`
  ${({ theme, title }) => css`
    margin: 0;
    color: ${title.indexOf('of White') > -1
      ? theme.colors.shades.white70.rgb
      : theme.colors.main.darkGrey.rgb};
  `};
`

const ColorTitle = styled('p')`
  ${({ theme, title }) => css`
    margin: 1rem 0 0.5rem 0;
    color: ${title.indexOf('of White') > -1 ? '#fff' : '#000'};
  `};
`

const ColorWrapper = styled('div')`
  ${({ theme, color }) => css`
    display: inline-block;
    padding: ${theme.spacings.giga};
    margin-right: ${theme.spacings.mega};
    margin-bottom: ${theme.spacings.mega};
    border-radius: ${theme.borderRadius.byte};
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
      <ColorRGB title={color.title}>{color.rgb}</ColorRGB>
    </ColorDescription>
  </ColorWrapper>
)

Swatch.propTypes = {
  color: PropTypes.object.isRequired,
}

export default Swatch
