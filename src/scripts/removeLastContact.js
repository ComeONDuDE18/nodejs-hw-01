import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const data = await readContacts();
        if (data.length === 0) {
            console.log('No contacts to remove');
            return;
        }
        const removeLast = data.slice(0, data.length - 1);
        await writeContacts(removeLast);
        console.log('Removed last');
    }
          catch (error) {
        console.error("error", error);
    }

};

removeLastContact();
