import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contactFilePath = path.join(process.cwd(), 'src/contact.json');

export async function POST(request: Request) {
    const newContact = await request.json();

    try {
        // Read the existing file
        const fileContent = fs.existsSync(contactFilePath)
            ? fs.readFileSync(contactFilePath, 'utf-8')
            : '[]';

        const contacts = JSON.parse(fileContent);

        // Add new contact to the array
        contacts.push(newContact);

        // Write updated data back to the file
        fs.writeFileSync(contactFilePath, JSON.stringify(contacts, null, 2));

        return NextResponse.json({ message: 'Contact saved successfully!' });
    } catch (error) {
        console.error('Error writing to contact.json:', error);
        return NextResponse.json(
            { message: 'Failed to save contact' },
            { status: 500 }
        );
    }
}
