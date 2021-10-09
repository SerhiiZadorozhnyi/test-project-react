import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/contact/contact-selector';
import { addContact } from 'redux/contact/contact-operations';

import styles from './ContactForm.module.css';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';


function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    const auditContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (auditContact) {
      alert(`Контакт ${name} з таким іменем вже існує.`);
      reset();
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };


  return (
    <div className={styles.ContactForm__container}>
      <form 
        onSubmit={handleSubmit} 
        className={styles.item__form} 
        autoComplete="off" 
        noValidate
      >
        <div className={styles.item__input}>
          <TextField
            size="small"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            placeholder="Jack Sparrow"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.item__input}>
          <InputMask
            mask="(999)999-99-99"
            maskChar={null}
            size="small"
            label="Phone"
            variant="outlined"
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
          >
            {inputProps => (
              <TextField
                {...inputProps}
                type=" number "
                variant="outlined"
              />
            )}
          </InputMask>
        </div>

        <div className={styles.item__input}>
          <Button 
            variant="contained"
            type="submit"
            color="primary"
            disabled={name === '' || number === ''}
            startIcon={<SaveIcon />}  
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
  
export default ContactForm;