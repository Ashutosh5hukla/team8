const nodemailer = require('nodemailer');

// Create transporter (using Gmail as example - can be configured)
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'noreply@insuretech.com',
        pass: process.env.EMAIL_PASS || 'dummy_password'
    }
});

exports.sendRenewalReminder = async (userEmail, policyNumber, expiryDate, renewalLink) => {
    // For hackathon: simulate email sending
    console.log('📧 SIMULATED EMAIL SENT:');
    console.log('To:', userEmail);
    console.log('Subject: Policy Renewal Reminder');
    console.log('Policy Number:', policyNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('Renewal Link:', renewalLink);
    console.log('---');

    // Uncomment below for actual email sending
    /*
    const mailOptions = {
        from: 'InsureTech <noreply@insuretech.com>',
        to: userEmail,
        subject: `Policy Renewal Reminder - ${policyNumber}`,
        html: `
            <h2>Your Policy is Expiring Soon!</h2>
            <p>Dear Valued Customer,</p>
            <p>Your insurance policy <strong>${policyNumber}</strong> will expire on <strong>${expiryDate}</strong>.</p>
            <p>To continue your coverage without interruption, please renew your policy:</p>
            <a href="${renewalLink}" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Renew Now</a>
            <p>Thank you for choosing InsureTech!</p>
        `
    };
    
    return await transporter.sendMail(mailOptions);
    */

    return { simulated: true, success: true };
};

exports.sendClaimUpdate = async (userEmail, claimId, status) => {
    console.log('📧 SIMULATED EMAIL: Claim Update');
    console.log('To:', userEmail);
    console.log('Claim ID:', claimId);
    console.log('New Status:', status);
    console.log('---');

    return { simulated: true, success: true };
};

exports.sendSMS = async (phone, message) => {
    console.log('📱 SIMULATED SMS:');
    console.log('To:', phone);
    console.log('Message:', message);
    console.log('---');

    return { simulated: true, success: true };
};
