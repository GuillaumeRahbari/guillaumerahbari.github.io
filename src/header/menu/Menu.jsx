import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
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
        <List style={{ width: 250 }}>
          <ListItem>
            <Button component={Link} to="/">
              Home
            </Button>
          </ListItem>
          <ListItem>
            <Button component={Link} to="/about">
              About Me
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
