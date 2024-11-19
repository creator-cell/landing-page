import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const clientsDataPath = path.join(process.cwd(), "src/clients.json");

export async function POST(request: Request) {
    try {
        const clientRequest = await request.json();
        const { companyName, contactNumber } = clientRequest;
        console.log("🚀 ~ POST ~ clientRequest:", clientRequest)


        if (!companyName && !contactNumber) {
            return NextResponse.json(
                { message: "Either companyName or contactNumber is required." },
                { status: 400 }
            );
        }

        // Check if the clients.json file exists and read its contents
        const clients = fs.existsSync(clientsDataPath)
            ? fs.readFileSync(clientsDataPath, "utf-8")
            : "[]";

        const clientsData = JSON.parse(clients);

        // Check if any client matches either the companyName or contactNumber
        const existingClient = clientsData.some(
            (client: any) =>
                client.companyName === companyName || client.contactInformation.contactNumber === contactNumber
        );
        console.log("🚀 ~ POST ~ existingClient:", existingClient)

        // Return true if a match is found, false otherwise
        return NextResponse.json(
            { exists: existingClient },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing the request", error);
        return NextResponse.json(
            { message: "An error occurred while checking client information." },
            { status: 500 }
        );
    }
}
