import { useSelector } from 'react-redux';
// import { removeUser } from 'store/userSlice';
// import { useLogOutMutation } from 'store/authApi';
// import Button from 'components/Button';
import Section from 'components/Section';
import Form from 'components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import LoginPage from './LoginPage';

function ContactsPage() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
}
export default ContactsPage;
