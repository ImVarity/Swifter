'use server'

import twilio from "twilio"

const authToken = process.env.TWILIO_AUTH_TOKEN
const accountSID = process.env.TWILIO_ACCOUNT_SID
const originNumber = process.env.TWILIO_PHONE_NUMBER || ""

const client = twilio(accountSID, authToken)

export async function checkValues() {
    console.log(authToken)
    console.log(accountSID)
    console.log(originNumber)
}

//Include +, no spaces
export async function createCall(number: string) {
    console.log("CALLED from " + originNumber);

    const call = await client.calls.create({
        from: originNumber,
        to: number,
        url: "demo.twilio.com/docs/voice.xml",
    })

    console.log(call.sid)
}

//Include +, no spaces
export async function createMessage(number: string, textbody: string) {
    console.log("MESSAGED from " + originNumber)

    const msg = await client.messages.create({
        from: originNumber,
        to: number,
        body: textbody,
    })

    console.log(msg.sid)
}