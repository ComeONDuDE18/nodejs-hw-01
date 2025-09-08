import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        const files = await fs.readFile('src/db/db.json', 'utf-8');
        const contacts = JSON.parse(files);
        return contacts.length;

    } catch (error) {
        console.error('Error reading contacts:', error);
        return error;
    }
};

console.log(await countContacts());
