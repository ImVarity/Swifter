'use server'

import { Vonage } from "@vonage/server-sdk"

const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET
})

const from = process.env.VONAGE_PHONE || ""
const to = process.env.TARGET_PHONE || ""

export async function sendSMS(text: string) {
    const res = await vonage.sms.send({to, from, text})
    console.log(res)
}