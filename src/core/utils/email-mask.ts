// Utility to mask an email address for privacy display
// Example: rohitparih@gmail.com => ro*****ih@g**l.com

export function maskEmail(email: string): string {
    const [local, domainFull] = email.split('@');
    if (!local || !domainFull) return email;
    const domainParts = domainFull.split('.');
    const domain = domainParts[0];
    const tld = domainParts.slice(1).join('.');

    // Mask local part
    let maskedLocal = local;
    if (local.length > 4) {
        maskedLocal = local.slice(0, 2) + '*'.repeat(local.length - 4) + local.slice(-2);
    }

    // Mask domain part
    let maskedDomain = domain;
    if (domain.length > 2) {
        maskedDomain = domain[0] + '*'.repeat(domain.length - 2) + domain.slice(-1);
    }

    return `${maskedLocal}@${maskedDomain}${tld ? '.' + tld : ''}`;
}

