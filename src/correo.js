import nodemailer from 'nodemailer';
import * as dotenv from "dotenv";
dotenv.config();

const psswd = process.env.GMAIL_PASSWORD;

console.log(psswd);

function createSendMail(mailConfig) {
    const transporter = nodemailer.createTransport(mailConfig);

    return async function sendMail({to, subject, text, html, attachments}){
        const mailOptions = { from: mailConfig.auth.user, to, subject, text, html, attachments};

        return transporter.sendMail(mailOptions);
    };
}

function createSendMailGmail() {
    return createSendMail({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "marcopontiz@gmail.com",
            pass: `${psswd}`
        }
    })
}

const sendMail = createSendMailGmail();
const emailAccount = 'marcopontiz@gmail.com';
const emailSubject = "Welcome to the platforms";
const emailText = "Hello, we welcome you to our website!";
const attachmentsPath = '';
const emailAttachments = [];

if(attachmentsPath){
    emailAttachments.push({path: attachmentsPath})
}

const info = await sendMail({
    to: emailAccount,
    subject: emailSubject,
    text: emailText,
    attachments: emailAttachments
});

console.log(info);