// Utility to mask an email address for privacy display
// Example: rohitparih@gmail.com => ro*****ih@g**l.com

export function maskEmail(email: string): string {
    const [local, domain] = email.split('@');
    if (!local || !domain) return email;

    let maskedLocal: string;

    if (local.length <= 1) {
        maskedLocal = '****';
    } else {
        maskedLocal = `${local[0]}****${local.slice(-1)}`;
    }

    return `${maskedLocal}@${domain}`;
}

