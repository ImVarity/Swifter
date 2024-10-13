

export function randomProfile() {
    // Generate random latitude between -90 and 90
    const latitude = (Math.random() * 180 - 90).toFixed(6);

    // Generate random longitude between -180 and 180
    const longitude = (Math.random() * 360 - 180).toFixed(6);



    return {
        latitude,
        longitude,
    }
}


export function randomContacts(count: number) {
    // Generate a random 10-digit contact number (US-like format)
    const randomPhoneNumber = () => {
        const areaCode = Math.floor(100 + Math.random() * 900); // 3-digit area code
        const centralOfficeCode = Math.floor(100 + Math.random() * 900); // 3-digit central office code
        const lineNumber = Math.floor(1000 + Math.random() * 9000); // 4-digit line number
        return `+1 (${areaCode}) ${centralOfficeCode}-${lineNumber}`; // US phone number format
    };

    // Create an array of random contact numbers
    const contacts = [];
    for (let i = 0; i < count; i++) {
        contacts.push(randomPhoneNumber());
    }

    return contacts; // Return the array of contact numbers
}