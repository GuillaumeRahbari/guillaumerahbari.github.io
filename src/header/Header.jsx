import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import MyProfile from './me.jpg';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className={'app-toolbar'}>
        <div className={'app-toolbar__menu'}>
          <IconButton color={'inherit'} aria-label="Menu">
            <FontAwesomeIcon icon={faBars} size={'lg'} />
          </IconButton>
        </div>
        <Avatar alt={'Guillaume Rahbari avatar'} src={MyProfile} />
        <div className={'app-toolbar__socials'}>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
