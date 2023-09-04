import { useEffect } from 'react';
import { Loader } from 'components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectContacts,
  selectFilteredContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Contact } from 'components/Contact/Contact';
import { List } from './Styled.List';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts?.length && !error & !isLoading) {
    return <p>No contacts added yet.</p>;
  }

  if (!filteredContacts?.length) {
    return <p>No matches.</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <List>
        {isLoading && <Loader />}
        {filteredContacts &&
          filteredContacts.map(contact => {
            return (
              <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            );
          })}
      </List>
    </>
  );
};
