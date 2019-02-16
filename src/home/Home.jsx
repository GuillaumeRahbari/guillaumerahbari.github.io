import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import MyProfile from './me.jpg';
import './Home.css';

export default withTheme()(function Home(props) {
  const { theme } = props;
  const primaryColor = theme.palette.primary;

  const styles = {
    section: {
      color: primaryColor.main,
    },
  };
  return (
    <section className={'section-container'} style={styles.section}>
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
