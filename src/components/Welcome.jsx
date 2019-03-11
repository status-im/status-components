import React from 'react';
import Typography from '@material-ui/core/Typography';


const styles = {
  main: {
    margin: 15,
    lineHeight: 1.4,
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },
};

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <Typography variant="display3">Welcome to Stability</Typography>
        <Typography variant="subheading" gutterBottom>
          A reusable component library that is designed and engineered to help us build better product faster at Status.
        </Typography>
      </div>
    );
  }
}
