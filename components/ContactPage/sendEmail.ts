"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailToSend = process.env.EMAIL_TO_SEND;

export const sendEmail = async (formData: FormData) => {
    const name = formData.get("name");
    const telegram = formData.get("telegram") || " ";
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || typeof name !== "string") {
        return {
            error: "Invalid name"
        }
    }

    if (!emailToSend || typeof emailToSend !== "string") {
        return {
            error: "Invalid email"
        }
    }

    if (!email || typeof email !== "string") {
        return {
            error: "Invalid email"
        }
    }

    if (!message || typeof message !== "string") {
        return {
            error: "Invalid message"
        }
    }

    try {
        await resend.emails.send({
            from: 'ABDK Contact Form <onboarding@resend.dev>',
            to: emailToSend as string,
            subject: "New Request from website ABDK.Consulting",
            replyTo: email as string,
            react: React.createElement(ContactFormEmail, {
                name: name as string,
                telegram: telegram as string,
                email: email as string,
                message: message as string,
            })
        });
    } catch (error: unknown) {
        return {
            error: "Error"
        }
    }
}