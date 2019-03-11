import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
  normalTooltip: {
    color: theme.palette.text.primary,
    background: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  errorTooltip: {
    color: 'red',
    background: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  arrowPopper: {
    '&[x-placement*="bottom"] $arrowArrow': {
      top: 0,
      left: 0,
      width: '3em',
      height: '1em',
      margimTop: '1em',
      '&::before': {
        border: `.9em solid black`,
        borderColor: `transparent ${theme.palette.common.white} ${theme.palette.common.white} transparent`,
        boxShadow: '2px -2px 2px 0 rgba(0, 0, 0, 0.1)',
        left: '0.3em',
        transformOrigin: '0 0',
        transform: 'rotate(-45deg)'
      }
    },
    '&[x-placement*="top"] $arrowArrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        border: `.9em solid black`,
        borderColor: `transparent transparent ${theme.palette.common.white} ${theme.palette.common.white}`,
        boxShadow: '-2px 2px 2px 0 rgba(0, 0, 0, 0.2)',
        left: '0.3em',
        transformOrigin: '0 0',
        transform: 'rotate(-45deg)'
      }
    }
  },
  arrowArrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid'
    }
  },
  button: {
    margin: theme.spacing.unit
  }
})

class CustomizedTooltip extends React.Component {
  state = { arrowRef: null }

  handleArrowRef = node => {
    this.setState({ arrowRef: node })
  }

  render() {
    const { classes, title, children, bottom, error } = this.props

    return (
      <Tooltip
        title={
          <React.Fragment>
            {title}
            <span className={classes.arrowArrow} ref={this.handleArrowRef} />
          </React.Fragment>
        }

        classes={{ popper: classes.arrowPopper, tooltip: error ? classes.errorTooltip : classes.normalTooltip }}
        placement={bottom ? 'bottom' : 'top'}
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(this.state.arrowRef),
                element: this.state.arrowRef,
              },
            },
          },
        }}
      >
        {children}
      </Tooltip>
    )
  }
}

CustomizedTooltip.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CustomizedTooltip)