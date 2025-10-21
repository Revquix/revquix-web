'use client';

import React from 'react';
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import Logo from "@/src/core/components/logo/logo";
import { ThemeSwitcher } from "@/src/core/components/theme-switcher";
import { PATH_CONSTANTS } from "@/src/core/constants/path-constants";
import { SERVICE_CONSTANTS } from "@/src/core/constants/service-constants";

const PrivacyPolicy: React.FC = () => {
    const lastUpdated = "October 21, 2025";

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-divider">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-2 text-foreground">
                            <Logo size={36} />
                            <span className="text-xl font-bold text-primary">Revquix</span>
                        </Link>
                        <ThemeSwitcher />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Card className="shadow-lg">
                    <CardHeader className="flex flex-col gap-3 p-6 sm:p-8">
                        <div className="flex items-center gap-3">
                            <Logo size={48} />
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-primary">
                                    Privacy Policy
                                </h1>
                                <p className="text-sm text-default-500 mt-1">
                                    Last Updated: {lastUpdated}
                                </p>
                            </div>
                        </div>
                        <Divider />
                    </CardHeader>

                    <CardBody className="p-6 sm:p-8 space-y-8">
                        {/* Introduction */}
                        <section>
                            <p className="text-default-700 leading-relaxed">
                                At Revquix, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                                disclose, and safeguard your information when you use our platform. Please read this Privacy
                                Policy carefully. By using Revquix, you consent to the data practices described in this policy.
                            </p>
                        </section>

                        {/* 1. Information We Collect */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                1. Information We Collect
                            </h2>
                            <div className="space-y-3 text-default-700">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">1.1 Personal Information</h3>
                                    <p className="leading-relaxed mb-2">
                                        We collect information that you voluntarily provide to us when you:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Register for an account (name, email address, username, password)</li>
                                        <li>Complete your user profile (bio, profile picture, location, social media links)</li>
                                        <li>Post content (blog posts, forum discussions, comments, messages)</li>
                                        <li>Communicate with us (support requests, feedback, inquiries)</li>
                                        <li>Participate in surveys or promotions</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">1.2 Automatically Collected Information</h3>
                                    <p className="leading-relaxed mb-2">
                                        When you access our Services, we automatically collect certain information, including:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                                        <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, search queries</li>
                                        <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                                        <li><strong>Referral Information:</strong> The website or source that referred you to Revquix</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">1.3 Cookies and Tracking Technologies</h3>
                                    <p className="leading-relaxed mb-2">
                                        We use cookies and similar tracking technologies to track activity on our Services and store
                                        certain information. Types of cookies we use include:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li><strong>Essential Cookies:</strong> Required for authentication and basic functionality</li>
                                        <li><strong>Authentication Tokens:</strong> We store refresh tokens in cookies to maintain your logged-in session</li>
                                        <li><strong>Preference Cookies:</strong> Remember your settings and preferences (e.g., theme selection)</li>
                                        <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
                                        <li><strong>Performance Cookies:</strong> Improve the speed and performance of our Services</li>
                                    </ul>
                                    <p className="leading-relaxed mt-2">
                                        You can control cookie preferences through your browser settings, but disabling certain cookies
                                        may limit your ability to use some features of our Services.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">1.4 User-Generated Content</h3>
                                    <p className="leading-relaxed">
                                        We collect and store all content you create on Revquix, including blog posts, forum discussions,
                                        comments, messages, images, and other media you upload. Please be aware that content you post
                                        publicly may be visible to other users and may be indexed by search engines.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">1.5 Social Media Integration</h3>
                                    <p className="leading-relaxed">
                                        If you choose to connect your Revquix account with third-party social media platforms (Facebook,
                                        Google, Twitter, etc.), we may collect information from those platforms in accordance with your
                                        privacy settings on those platforms.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <Divider />

                        {/* 2. How We Use Your Information */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                2. How We Use Your Information
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed mb-2">
                                    We use the information we collect for various purposes, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Provide and Maintain Services:</strong> Create and manage your account, enable core features like blogging, forums, and messaging</li>
                                    <li><strong>Authentication and Security:</strong> Verify your identity, maintain secure sessions using refresh tokens, and protect against unauthorized access</li>
                                    <li><strong>Personalization:</strong> Customize your experience, recommend content, and remember your preferences</li>
                                    <li><strong>Communication:</strong> Send you updates, newsletters, notifications about activity on your posts, and respond to your inquiries</li>
                                    <li><strong>Analytics and Improvement:</strong> Analyze usage patterns, improve our Services, develop new features, and optimize performance</li>
                                    <li><strong>Community Management:</strong> Moderate content, enforce our Terms of Service, and maintain a safe community</li>
                                    <li><strong>Legal Compliance:</strong> Comply with legal obligations, resolve disputes, and enforce our agreements</li>
                                    <li><strong>Marketing:</strong> Send promotional materials about new features, events, or services (you can opt-out at any time)</li>
                                </ul>
                            </div>
                        </section>

                        <Divider />

                        {/* 3. How We Share Your Information */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                3. How We Share Your Information
                            </h2>
                            <div className="space-y-3 text-default-700">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Public Information</h3>
                                    <p className="leading-relaxed">
                                        Content you post publicly on Revquix (blog posts, forum discussions, comments, public profile
                                        information) is visible to other users and may be accessible via search engines. Please think
                                        carefully before sharing personal information publicly.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">3.2 Service Providers</h3>
                                    <p className="leading-relaxed mb-2">
                                        We may share your information with third-party service providers who assist us in operating our
                                        platform, such as:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Cloud hosting and infrastructure providers</li>
                                        <li>Email delivery services</li>
                                        <li>Analytics and monitoring services</li>
                                        <li>Payment processors (if applicable)</li>
                                        <li>Content delivery networks (CDNs)</li>
                                        <li>Customer support tools</li>
                                    </ul>
                                    <p className="leading-relaxed mt-2">
                                        These service providers are bound by confidentiality obligations and are only authorized to use
                                        your information as necessary to provide services to us.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">3.3 Third-Party Sharing</h3>
                                    <p className="leading-relaxed">
                                        We do not currently sell or rent your personal information to third parties for their marketing
                                        purposes. However, we reserve the right to share information with third parties in the future if
                                        necessary for business operations. If we do so, we will update this Privacy Policy and provide
                                        appropriate notice.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">3.4 Legal Requirements</h3>
                                    <p className="leading-relaxed mb-2">
                                        We may disclose your information if required to do so by law or in response to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Legal processes (subpoenas, court orders, legal proceedings)</li>
                                        <li>Government or regulatory requests</li>
                                        <li>Protection of our rights, property, or safety, or that of our users or the public</li>
                                        <li>Investigation of potential violations of our Terms of Service</li>
                                        <li>Prevention of fraud, security threats, or illegal activity</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">3.5 Business Transfers</h3>
                                    <p className="leading-relaxed">
                                        If Revquix is involved in a merger, acquisition, asset sale, or bankruptcy, your information may
                                        be transferred as part of that transaction. We will provide notice before your information is
                                        transferred and becomes subject to a different privacy policy.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">3.6 With Your Consent</h3>
                                    <p className="leading-relaxed">
                                        We may share your information for any other purpose with your explicit consent.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <Divider />

                        {/* 4. Data Retention */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                4. Data Retention
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    We retain your personal information for as long as necessary to provide our Services, comply with
                                    legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we
                                    will delete or anonymize your personal information within a reasonable timeframe, unless we are
                                    required to retain it for legal or legitimate business purposes.
                                </p>
                                <p className="leading-relaxed">
                                    Some information may remain in backup copies for a limited period and may be retained as necessary
                                    for legal compliance, dispute resolution, or to prevent fraud and abuse.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 5. Data Security */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                5. Data Security
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    We implement appropriate technical and organizational security measures to protect your personal
                                    information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Encryption of data in transit using SSL/TLS protocols</li>
                                    <li>Encryption of sensitive data at rest</li>
                                    <li>Secure storage of authentication tokens and passwords (hashed and salted)</li>
                                    <li>Regular security assessments and updates</li>
                                    <li>Access controls and authentication mechanisms</li>
                                    <li>Monitoring for suspicious activity</li>
                                </ul>
                                <p className="leading-relaxed mt-2">
                                    However, no method of transmission over the internet or electronic storage is 100% secure. While we
                                    strive to use commercially acceptable means to protect your information, we cannot guarantee its
                                    absolute security.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 6. Your Rights and Choices */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                6. Your Rights and Choices
                            </h2>
                            <div className="space-y-3 text-default-700">
                                <p className="leading-relaxed mb-2">
                                    Depending on your location, you may have certain rights regarding your personal information:
                                </p>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">6.1 Access and Portability</h3>
                                    <p className="leading-relaxed">
                                        You have the right to access your personal information and request a copy of the data we hold about you.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">6.2 Correction</h3>
                                    <p className="leading-relaxed">
                                        You can update or correct your personal information through your account settings or by contacting us.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">6.3 Deletion</h3>
                                    <p className="leading-relaxed">
                                        You can request deletion of your personal information, subject to certain exceptions (legal
                                        obligations, dispute resolution, etc.). You can delete your account through your account settings.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">6.4 Opt-Out</h3>
                                    <p className="leading-relaxed">
                                        You can opt out of receiving promotional emails by clicking the "unsubscribe" link in those emails
                                        or adjusting your notification preferences in your account settings.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">6.5 Cookie Controls</h3>
                                    <p className="leading-relaxed">
                                        You can control cookies through your browser settings. Note that disabling cookies may affect your
                                        ability to use certain features of our Services.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">6.6 Do Not Track</h3>
                                    <p className="leading-relaxed">
                                        Some browsers have a "Do Not Track" feature. Currently, we do not respond to Do Not Track signals.
                                    </p>
                                </div>

                                <p className="leading-relaxed mt-3">
                                    To exercise any of these rights, please contact us at privacy@revquix.com. We will respond to your
                                    request within a reasonable timeframe as required by applicable law.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 7. Children's Privacy */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                7. Children's Privacy
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    Our Services are not intended for children under the age of 13. We do not knowingly collect personal
                                    information from children under 13. If you are a parent or guardian and believe your child has
                                    provided us with personal information, please contact us, and we will delete such information from
                                    our systems.
                                </p>
                                <p className="leading-relaxed">
                                    Users between 13 and 18 years old must have parental or guardian consent to use our Services.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 8. International Data Transfers */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                8. International Data Transfers
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    Your information may be transferred to and processed in countries other than your country of residence.
                                    These countries may have data protection laws that are different from the laws of your country.
                                </p>
                                <p className="leading-relaxed">
                                    We take appropriate measures to ensure that your personal information remains protected in accordance
                                    with this Privacy Policy, regardless of where it is processed.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 9. Third-Party Links */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                9. Third-Party Links and Services
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    Our Services may contain links to third-party websites, applications, or services that are not owned
                                    or controlled by Revquix. This Privacy Policy does not apply to those third-party services. We are
                                    not responsible for the privacy practices of third-party websites or services.
                                </p>
                                <p className="leading-relaxed">
                                    We encourage you to review the privacy policies of any third-party services you visit or use.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 10. California Privacy Rights */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                10. California Privacy Rights (CCPA)
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>The right to know what personal information we collect, use, and disclose</li>
                                    <li>The right to request deletion of your personal information</li>
                                    <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
                                    <li>The right to non-discrimination for exercising your privacy rights</li>
                                </ul>
                                <p className="leading-relaxed mt-2">
                                    To exercise these rights, contact us at privacy@revquix.com with "California Privacy Rights" in the subject line.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 11. GDPR Rights */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                11. European Privacy Rights (GDPR)
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    If you are located in the European Economic Area (EEA), you have certain rights under the General Data
                                    Protection Regulation (GDPR):
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Right to access your personal data</li>
                                    <li>Right to rectification of inaccurate data</li>
                                    <li>Right to erasure ("right to be forgotten")</li>
                                    <li>Right to restrict processing</li>
                                    <li>Right to data portability</li>
                                    <li>Right to object to processing</li>
                                    <li>Right to withdraw consent at any time</li>
                                    <li>Right to lodge a complaint with a supervisory authority</li>
                                </ul>
                                <p className="leading-relaxed mt-2">
                                    Our legal basis for processing your data includes: consent, performance of a contract, compliance with
                                    legal obligations, and legitimate interests.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 12. Changes to Privacy Policy */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                12. Changes to This Privacy Policy
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                                    legal requirements, or other factors. We will notify you of any material changes by posting the new
                                    Privacy Policy on this page and updating the "Last Updated" date.
                                </p>
                                <p className="leading-relaxed">
                                    We encourage you to review this Privacy Policy periodically. Your continued use of the Services after
                                    any changes indicates your acceptance of the updated Privacy Policy.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 13. Contact Us */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                13. Contact Information
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                                    please contact us at:
                                </p>
                                <div className="bg-default-100 p-4 rounded-lg">
                                    <p className="font-semibold">Revquix - Data Protection Office</p>
                                    <p>Email: privacy@revquix.com</p>
                                    <p>Support: support@revquix.com</p>
                                    <p>Legal: legal@revquix.com</p>
                                </div>
                                <p className="leading-relaxed mt-3">
                                    We will respond to your inquiries within a reasonable timeframe as required by applicable law.
                                </p>
                            </div>
                        </section>

                        {/* Acknowledgment */}
                        <section className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                            <p className="text-sm text-default-700 leading-relaxed">
                                By using Revquix, you acknowledge that you have read and understood this Privacy Policy and
                                consent to the collection, use, and disclosure of your information as described herein.
                            </p>
                        </section>
                    </CardBody>
                </Card>
            </main>

            {/* Footer */}
            <footer className="bg-default-100 border-t border-divider mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Logo size={32} />
                            <span className="font-bold text-primary">Revquix</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <Link href="/" className="text-default-600 hover:text-primary">
                                Home
                            </Link>
                            <Link href={PATH_CONSTANTS.TERMS_OF_SERVICE} className="text-default-600 hover:text-primary">
                                Terms of Service
                            </Link>
                            <Link href={PATH_CONSTANTS.PRIVACY_POLICY} className="text-primary font-medium">
                                Privacy Policy
                            </Link>
                        </div>
                        <p className="text-sm text-default-500">
                            {SERVICE_CONSTANTS.COPYRIGHT_BASE_TEXT}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;

