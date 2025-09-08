import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
const allContacts = await readContacts();
console.log('All Contacts:', allContacts);
return allContacts;
};

console.log(await getAllContacts());
