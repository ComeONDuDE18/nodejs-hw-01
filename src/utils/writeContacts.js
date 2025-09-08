import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const writeContacts = async (updatedContacts) => {
    const data = JSON.stringify(updatedContacts);
    try {
        await fs.writeFile(PATH_DB, data, 'utf-8');
        console.log('Contacts written successfully');
    }
    catch (error) {
        console.error('Error writing contacts:', error);
    }
};
