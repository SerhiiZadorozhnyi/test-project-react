import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contact/contact-operations';
import { getVisibleContact } from 'redux/contact/contact-selector';

import styles from './ContactList.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link, useLocation } from 'react-router-dom';


function ContactList() {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();
  const location = useLocation();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      {!contacts.length && <div>Contacts not found.</div>}

      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={number} />
            <Link
              className={styles.button__mardg}
              to={{
                pathname: `/contacts/${id}`,
                state: { from: location },
                name: name,
                number: number,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<BorderColorIcon />}
              >
                Edit
              </Button>
            </Link>

            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
  
export default ContactList;