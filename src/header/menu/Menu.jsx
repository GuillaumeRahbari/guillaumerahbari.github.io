import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { PAGES } from '../../models/pages';

function styles(theme) {
  return {
    buttonIcon: {
      marginRight: theme.spacing.unit,
    },
    list: {
      width: 150,
    },
  };
}

export default withStyles(styles)(function Menu(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <IconButton
        color={'inherit'}
        aria-label="Menu"
        onClick={() => setOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} size={'lg'} />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List className={classes.list}>
          {PAGES.map(({ index, route, icon, text }) => (
            <ListItem key={index}>
              <Button component={Link} to={route} color="secondary">
                <FontAwesomeIcon
                  icon={icon}
                  size={'lg'}
                  className={classes.buttonIcon}
                />
                {text}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
});
