import React from "react";
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = {
    name: string;
    telegram: string;
    email: string;
    message: string;
}

export default function ContactFormEmail({ name, telegram, email, message }: ContactFormEmailProps) {
    return <Html>
        <Head/>
        <Preview>New request from {name}</Preview>
        <Tailwind>
            <Body>
                <Container>
                    <Section>
                        <Heading>New request from {name}</Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>Name: {name}</Text>
                        <Text>Email: {email}</Text>
                        <Text>Telegram: {telegram}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
}