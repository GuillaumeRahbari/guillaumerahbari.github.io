import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Menu } from './menu';
import './Header.css';

export default withTheme()(function Header(props) {
  const { theme } = props;
  const secondaryColor = theme.palette.secondary;

  const styles = {
    section: {
      color: secondaryColor.main,
    },
  };

  return (
    <section className={'app-header'} style={styles.section}>
      <div className={'app-header__menu'}>
        <Menu />
      </div>
      <div className={'app-header__socials'}>
        <IconButton
          color={'inherit'}
          component={'a'}
          href={''}
          target={'_blank'}
          aria-label="Go to the twitter page of Guillaume Rahbari (new window)"
        >
          <FontAwesomeIcon icon={faTwitter} size={'lg'} />
        </IconButton>
        <IconButton
          color={'inherit'}
          component={'a'}
          href={''}
          target={'_blank'}
          aria-label="Go to the facebook page of Guillaume Rahbari (new window)"
        >
          <FontAwesomeIcon icon={faFacebookF} size={'lg'} />
        </IconButton>
        <IconButton
          color={'inherit'}
          component={'a'}
          href={''}
          target={'_blank'}
          aria-label="Go to the github page of Guillaume Rahbari (new window)"
        >
          <FontAwesomeIcon icon={faGithub} size={'lg'} />
        </IconButton>
        <IconButton
          color={'inherit'}
          component={'a'}
          href={'mailto:guillaume.rahbari@gmail.com'}
          aria-label="Send an email to Guillaume Rahbari"
        >
          <FontAwesomeIcon icon={faEnvelope} size={'lg'} />
        </IconButton>
      </div>
    </section>
  );
});
