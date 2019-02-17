import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from './menu';
import { SOCIALS } from '../models/socials';

function styles(theme) {
  const secondaryColor = theme.palette.secondary;
  return {
    section: {
      color: secondaryColor.main,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '60px',
    },
    icon: {
      '&:hover': {
        transform: 'rotate(360deg)',
        transition: 'all 0.5s ease-in-out 0s',
      },
    },
    facebook: {
      '&:hover': {
        color: '#4267b2',
      },
    },
    twitter: {
      '&:hover': {
        color: '#38A1F3',
      },
    },
    github: {
      '&:hover': {
        color: '#24292e',
      },
    },
  };
}

export default withStyles(styles)(function Header(props) {
  const { classes } = props;
  return (
    <section className={classes.section}>
      <div>
        <Menu />
      </div>
      <div>
        {SOCIALS.map(({ index, name, icon, href, text }) => (
          <IconButton
            key={index}
            color={'inherit'}
            component={'a'}
            href={href}
            target={'_blank'}
            aria-label={text}
            className={classnames(classes.icon, classes[name])}
          >
            <FontAwesomeIcon icon={icon} size={'lg'} />
          </IconButton>
        ))}
      </div>
    </section>
  );
});
