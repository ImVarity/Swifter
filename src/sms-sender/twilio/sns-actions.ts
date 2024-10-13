'use server'

import { 
    PinpointSMSVoiceClient, 
    type PinpointSMSVoiceClientConfig, 
    SendVoiceMessageCommand,
    type SendVoiceMessageCommandInput
} 
from "@aws-sdk/client-pinpoint-sms-voice"

const config : PinpointSMSVoiceClientConfig = {
    region: process.env.SNS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY || "",
        secretAccessKey: process.env.AWS_SECRET_KEY || ""
    }
}

const client = new PinpointSMSVoiceClient(config)

export async function sendVoiceMessage(bodytext: string) {
    const command = new SendVoiceMessageCommand(
        {
            //CallerId: "STRING_VALUE",
            //ConfigurationSetName: "STRING_VALUE",
            Content: { // VoiceMessageContent
                CallInstructionsMessage: { // CallInstructionsMessageType
                    Text: bodytext,
                },
                PlainTextMessage: { // PlainTextMessageType
                    //LanguageCode: "STRING_VALUE",
                    Text: bodytext,
                    //VoiceId: "STRING_VALUE",
                },
                SSMLMessage: { // SSMLMessageType
                    //LanguageCode: "STRING_VALUE",
                    Text: bodytext,
                    //VoiceId: "STRING_VALUE",
                },
            },
            DestinationPhoneNumber: "+14253708500",
            OriginationPhoneNumber: process.env.AWS_PHONE,
        }
    )
    const response = await client.send(command)
    return response
}


