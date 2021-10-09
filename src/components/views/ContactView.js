import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { fetchContact } from "redux/contact/contact-operations";


function ContactView() {
    const dispatch = useDispatch();
    // eslint-disable-next-line
    useEffect(() => dispatch(fetchContact()), []);
    
    return(
        <>
            <ContactForm />
            {/* <Filter /> */}
            <ContactList />
        </>
    );
}

export default ContactView;