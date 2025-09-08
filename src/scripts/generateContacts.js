
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
    const contacts = await readContacts();
    const newContact = Array.from({ length: number }, () => ( createFakeContact()));
    const updatedContacts = contacts.concat(...newContact);
    await writeContacts(updatedContacts);
    console.log(`${number} contacts generated and saved.`);
    }

    catch (error) {
        console.error('Error generating contacts:', error);

    }

};
generateContacts(5);

