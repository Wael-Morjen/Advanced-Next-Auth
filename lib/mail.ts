import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
    email: string,
    token: string,
) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <p style="font-size: 18px; color: #333; line-height: 1.6;">Dear User,</p>
            <p style="font-size: 16px; color: #555; line-height: 1.6;">
                Thank you for signing up! Please click the link below to confirm your email address.
            </p>
            <p style="text-align: center; margin-top: 20px;">
                <a href="${confirmLink}" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px;">Confirm Email</a>
            </p>
            <p style="font-size: 14px; color: #888; line-height: 1.4; margin-top: 20px;">
                If the button above doesn't work, you can also click <a href="${confirmLink}">${confirmLink}</a> to confirm your email.
            </p>
            <p style="font-size: 14px; color: #888; line-height: 1.4; margin-top: 20px;">
                Best regards,<br/>
                Your Company Name
            </p>
        </div>
    `;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        html: htmlContent
    });
};

export const sendPasswordResetEmail = async (
    email: string,
    token: string
) => {
    const resetLink = `http://localhost:3000/auth/new-password?${token}`;

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <p style="font-size: 18px; color: #333; line-height: 1.6;">Dear User,</p>
            <p style="font-size: 16px; color: #555; line-height: 1.6;">
                You've requested to reset your password. Click the link below to proceed.
            </p>
            <p style="text-align: center; margin-top: 20px;">
                <a href="${resetLink}" style="display: inline-block; padding: 12px 24px; background-color: #FF4500; color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px;">Reset Password</a>
            </p>
            <p style="font-size: 14px; color: #888; line-height: 1.4; margin-top: 20px;">
                If the button above doesn't work, you can also click <a href="${resetLink}">${resetLink}</a> to reset your password.
            </p>
            <p style="font-size: 14px; color: #888; line-height: 1.4; margin-top: 20px;">
                Note: If you didn't request a password reset, please ignore this email.
            </p>
            <p style="font-size: 14px; color: #888; line-height: 1.4; margin-top: 20px;">
                Best regards,<br/>
                Your Company Name
            </p>
        </div>
    `;

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: "Reset your password",
        html: htmlContent
    });
};

export const sendTwoFactorTokenEmail = async (
    email: string,
    token: string
) => {
    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <p style="font-size: 18px; color: #333; line-height: 1.6;">Two-Factor Authentication Code</p>
            <p style="font-size: 16px; color: #555; line-height: 1.6;">
                Here is your two-factor authentication code: <strong>${token}</strong>
            </p>
            <p style="font-size: 14px; color: #888; line-height: 1.4; margin-top: 20px;">
                This code will expire in a short period, so please use it promptly.
            </p>
            <p style="font-size: 14px; color: #888; line-height: 1.4; margin-top: 20px;">
                If you didn't request this code, please contact support immediately.
            </p>
            <p style="font-size: 14px; color: #888; line-height: 1.4; margin-top: 20px;">
                Best regards,<br/>
                Your Company Name
            </p>
        </div>`
    ;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "TWO FACTOR AUTHENTICATION CODE",
        html: htmlContent
    });
};