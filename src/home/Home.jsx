import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MyProfile from './me.jpg';
import './Home.css';

function styles(theme) {
  const primaryColor = theme.palette.primary;
  return {
    section: {
      color: primaryColor.main,
    },
  };
}

export default withStyles(styles)(function Home(props) {
  const { classes } = props;
  return (
    <section className={classnames('section-container', classes.section)}>
      <h1 className={'title'}>Full-stack Javascript Lead tech</h1>
      <h2>
        I design and code beautifully simple things, and I love what I do.
      </h2>
      <div className={'app-home__avatar'}>
        <img
          src={MyProfile}
          alt={'Guillaume Rahbari avatar'}
          className={'app-home__avatar-img'}
        />
      </div>
    </section>
  );
});
