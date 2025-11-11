import nodemailer from "nodemailer"

const NODEMAILER_EMAIL_ADDRESS = process.env.NODEMAILER_EMAIL_ADDRESS
const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD
const NODEMAILER_SERVICE = process.env.NODEMAILER_SERVICE


const mailer = nodemailer.createTransport({
    service: NODEMAILER_SERVICE,
    auth: {
        pass: NODEMAILER_PASSWORD,
        user: NODEMAILER_EMAIL_ADDRESS
    }
})


export default mailer