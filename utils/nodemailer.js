
require('dotenv').config()
const nodemailer = require('nodemailer')


const email = process.env.NODEMAILER_EMAIL
const pass = process.env.NODEMAILER_PASSWORD

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
    user: email,
    pass: pass
    }
});

module.exports ={transporter,email} 