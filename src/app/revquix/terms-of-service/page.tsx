'use client';

import React from 'react';
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import Logo from "@/src/core/components/logo/logo";
import { ThemeSwitcher } from "@/src/core/components/theme-switcher";
import { PATH_CONSTANTS } from "@/src/core/constants/path-constants";
import { SERVICE_CONSTANTS } from "@/src/core/constants/service-constants";

const TermsOfService: React.FC = () => {
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
                                    Terms of Service
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
                                Welcome to Revquix! These Terms of Service ("Terms") govern your access to and use of
                                Revquix's website, services, and applications (collectively, the "Services"). By accessing
                                or using our Services, you agree to be bound by these Terms. If you do not agree to these
                                Terms, please do not use our Services.
                            </p>
                        </section>

                        {/* 1. Acceptance of Terms */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                1. Acceptance of Terms
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    By creating an account, accessing, or using Revquix, you acknowledge that you have read,
                                    understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply
                                    to all users, including but not limited to visitors, registered users, bloggers, forum
                                    participants, and content contributors.
                                </p>
                                <p className="leading-relaxed">
                                    You must be at least 13 years old to use Revquix. If you are under 18, you represent that
                                    you have your parent's or guardian's permission to use the Services.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 2. Description of Services */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                2. Description of Services
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    Revquix is a comprehensive platform that provides:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Blog Creation & Publishing:</strong> Tools to write, edit, and publish blog posts on various topics</li>
                                    <li><strong>Discussion Forums:</strong> Community spaces for engaging in conversations and sharing knowledge</li>
                                    <li><strong>Real-time Messaging:</strong> Instant messaging capabilities to connect with other users</li>
                                    <li><strong>Social Media Features:</strong> Ability to create posts, interact with content, and build connections</li>
                                    <li><strong>Content Discovery:</strong> Browse, search, and discover content from the community</li>
                                </ul>
                            </div>
                        </section>

                        <Divider />

                        {/* 3. User Accounts */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                3. User Accounts and Registration
                            </h2>
                            <div className="space-y-3 text-default-700">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Account Creation</h3>
                                    <p className="leading-relaxed">
                                        To access certain features of Revquix, you must register for an account. You agree to
                                        provide accurate, current, and complete information during registration and to update
                                        such information to keep it accurate, current, and complete.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">3.2 Account Security</h3>
                                    <p className="leading-relaxed">
                                        You are responsible for maintaining the confidentiality of your account credentials and
                                        for all activities that occur under your account. You must immediately notify us of any
                                        unauthorized use of your account or any other security breach.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">3.3 Account Termination</h3>
                                    <p className="leading-relaxed">
                                        We reserve the right to suspend or terminate your account at any time for any reason,
                                        including but not limited to violation of these Terms, without prior notice or liability.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <Divider />

                        {/* 4. User Content */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                4. User Content and Conduct
                            </h2>
                            <div className="space-y-3 text-default-700">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Content Ownership</h3>
                                    <p className="leading-relaxed">
                                        You retain ownership of any content you post, upload, or share on Revquix ("User Content").
                                        However, by posting User Content, you grant Revquix a worldwide, non-exclusive, royalty-free,
                                        transferable license to use, reproduce, distribute, prepare derivative works of, display, and
                                        perform your User Content in connection with operating and providing the Services.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Content Responsibility</h3>
                                    <p className="leading-relaxed">
                                        You are solely responsible for your User Content and the consequences of posting or publishing it.
                                        You represent and warrant that you own or have the necessary rights to post your User Content and
                                        that such content does not violate any third-party rights.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">4.3 Prohibited Content</h3>
                                    <p className="leading-relaxed mb-2">You agree not to post User Content that:</p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Is illegal, harmful, threatening, abusive, harassing, defamatory, or invasive of privacy</li>
                                        <li>Contains hate speech, discriminatory content, or promotes violence</li>
                                        <li>Infringes any patent, trademark, trade secret, copyright, or other proprietary rights</li>
                                        <li>Contains viruses, malware, or other harmful computer code</li>
                                        <li>Is sexually explicit or pornographic in nature</li>
                                        <li>Impersonates any person or entity or misrepresents your affiliation</li>
                                        <li>Contains spam, advertising, or promotional content without authorization</li>
                                        <li>Violates any applicable laws or regulations</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">4.4 Content Moderation</h3>
                                    <p className="leading-relaxed">
                                        We reserve the right (but not the obligation) to review, monitor, and remove User Content
                                        that violates these Terms or is otherwise objectionable, at our sole discretion and without notice.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <Divider />

                        {/* 5. Acceptable Use */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                5. Acceptable Use Policy
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed mb-2">You agree not to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Use the Services for any illegal purpose or in violation of any laws</li>
                                    <li>Attempt to gain unauthorized access to any portion of the Services or other systems</li>
                                    <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                                    <li>Use automated means (bots, scripts, etc.) to access the Services without permission</li>
                                    <li>Collect or harvest any personally identifiable information from the Services</li>
                                    <li>Engage in any activity that could damage, disable, or impair the Services</li>
                                    <li>Circumvent any security features or access restrictions</li>
                                    <li>Use the Services to transmit spam or unsolicited communications</li>
                                </ul>
                            </div>
                        </section>

                        <Divider />

                        {/* 6. Intellectual Property */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                6. Intellectual Property Rights
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    The Services and their entire contents, features, and functionality (including but not limited to
                                    all information, software, text, displays, images, video, and audio, and the design, selection,
                                    and arrangement thereof) are owned by Revquix, its licensors, or other providers of such material
                                    and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                                </p>
                                <p className="leading-relaxed">
                                    The Revquix name, logo, and all related names, logos, product and service names, designs, and
                                    slogans are trademarks of Revquix. You must not use such marks without our prior written permission.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 7. Privacy and Data */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                7. Privacy and Data Protection
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    Your use of the Services is also governed by our{' '}
                                    <Link href={PATH_CONSTANTS.PRIVACY_POLICY} className="text-primary font-medium">
                                        Privacy Policy
                                    </Link>
                                    , which is incorporated into these Terms by reference. Please review our Privacy Policy to
                                    understand how we collect, use, and protect your personal information.
                                </p>
                                <p className="leading-relaxed">
                                    We use cookies and similar technologies to maintain your session, including storing refresh
                                    tokens for authentication purposes. By using our Services, you consent to our use of cookies
                                    as described in our Privacy Policy.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 8. Third-Party Services */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                8. Third-Party Services and Links
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    The Services may contain links to third-party websites or services that are not owned or
                                    controlled by Revquix. We have no control over, and assume no responsibility for, the content,
                                    privacy policies, or practices of any third-party websites or services.
                                </p>
                                <p className="leading-relaxed">
                                    While we do not currently share your information with third parties for their marketing purposes,
                                    we may share information with service providers who assist us in operating our platform, and we
                                    may do so with other third parties in the future if necessary for business operations. Any such
                                    sharing will be disclosed in our Privacy Policy.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 9. Disclaimers */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                9. Disclaimers and Limitations
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed uppercase font-semibold">
                                    THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
                                    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                                    PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                                </p>
                                <p className="leading-relaxed">
                                    Revquix does not warrant that the Services will be uninterrupted, secure, or error-free, or
                                    that any defects will be corrected. We do not warrant or make any representations regarding
                                    the accuracy or reliability of any content on the Services.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 10. Limitation of Liability */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                10. Limitation of Liability
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed uppercase font-semibold">
                                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL REVQUIX, ITS AFFILIATES,
                                    OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                                    CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE,
                                    OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SERVICES.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 11. Indemnification */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                11. Indemnification
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    You agree to defend, indemnify, and hold harmless Revquix and its affiliates, licensors, and
                                    service providers, and their respective officers, directors, employees, contractors, agents,
                                    licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages,
                                    judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees)
                                    arising out of or relating to your violation of these Terms or your use of the Services.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 12. Termination */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                12. Termination
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    We may terminate or suspend your account and access to the Services immediately, without prior
                                    notice or liability, for any reason, including but not limited to breach of these Terms. Upon
                                    termination, your right to use the Services will immediately cease.
                                </p>
                                <p className="leading-relaxed">
                                    You may terminate your account at any time by contacting us. All provisions of these Terms that
                                    by their nature should survive termination shall survive, including ownership provisions, warranty
                                    disclaimers, indemnity, and limitations of liability.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 13. Changes to Terms */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                13. Changes to Terms
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    We reserve the right to modify or replace these Terms at any time at our sole discretion. If a
                                    revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                                    What constitutes a material change will be determined at our sole discretion.
                                </p>
                                <p className="leading-relaxed">
                                    By continuing to access or use our Services after revisions become effective, you agree to be
                                    bound by the revised terms. If you do not agree to the new terms, you must stop using the Services.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 14. Governing Law */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                14. Governing Law and Dispute Resolution
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
                                    in which Revquix operates, without regard to its conflict of law provisions.
                                </p>
                                <p className="leading-relaxed">
                                    Any disputes arising out of or relating to these Terms or the Services shall be resolved through
                                    binding arbitration, except that either party may seek injunctive relief in court for infringement
                                    of intellectual property rights.
                                </p>
                            </div>
                        </section>

                        <Divider />

                        {/* 15. Contact Information */}
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                15. Contact Information
                            </h2>
                            <div className="space-y-2 text-default-700">
                                <p className="leading-relaxed">
                                    If you have any questions about these Terms, please contact us at:
                                </p>
                                <div className="bg-default-100 p-4 rounded-lg">
                                    <p className="font-semibold">Revquix</p>
                                    <p>Email: legal@revquix.com</p>
                                    <p>Support: support@revquix.com</p>
                                </div>
                            </div>
                        </section>

                        {/* Acknowledgment */}
                        <section className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                            <p className="text-sm text-default-700 leading-relaxed">
                                By using Revquix, you acknowledge that you have read and understood these Terms of Service
                                and agree to be bound by them.
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
                            <Link href={PATH_CONSTANTS.TERMS_OF_SERVICE} className="text-primary font-medium">
                                Terms of Service
                            </Link>
                            <Link href={PATH_CONSTANTS.PRIVACY_POLICY} className="text-default-600 hover:text-primary">
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

export default TermsOfService;

