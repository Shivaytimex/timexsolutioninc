/* eslint-disable react/no-unescaped-entities */

export default function PrivacyPolicy() {
    return (
        <div className="py-20 mt-24 lg:mt-28 xl:mt-28">
            <div className="w-full max-w-4xl mx-auto border rounded-3xl p-4 md:p-8">
                <h3 className="text-4xl font-bold text-white mb-5">Privacy Policy</h3>
                <div className="">
                    <div className="space-y-6 text-base text-gray-300">
                        <p className="font-semibold text-xl">Timex Solution Inc</p>
                        <p>
                            Timex Solution Inc is committed to respecting and
                            protecting the privacy of individuals who interact with us. This Privacy Notice explains how we collect,
                            use, disclose, and protect your personal data when you engage with us through our website or services.
                        </p>
                        <p>
                            <strong className="text-white">Registered Address:</strong> 715 P St, Sacramento, CA 95814, United States
                        </p>
                        <p>
                            <strong className="text-white">Email:</strong> team@timexsolutioninc.com
                        </p>
                        <p>
                            <strong className="text-white">Contact:</strong> +1 559-505-3443
                        </p>

                        <h3 className="text-xl font-semibold text-white">1. INFORMATION WE MAY COLLECT</h3>
                        <p>
                            <strong className="text-white">a) Information Related to Website Use</strong>
                        </p>
                        <p>
                            We and our third-party service providers use cookies and tracking technologies to collect information
                            about how you interact with our website, including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-300">
                            <li>Pages visited</li>
                            <li>Services searched for</li>
                            <li>Links and content accessed</li>
                        </ul>
                        <p>This helps us improve your user experience and tailor our marketing strategies.</p>

                        <p>
                            <strong className="text-white">b) Technical Data</strong>
                        </p>
                        <p>We automatically collect technical information when you visit our website, including:</p>
                        <ul className="list-disc pl-6 text-gray-300">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Device type</li>
                        </ul>

                        <p>
                            <strong className="text-white">c) Contact Information</strong>
                        </p>
                        <p>If you sign up for newsletters, request information, or attend events, we may collect:</p>
                        <ul className="list-disc pl-6 text-gray-300">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Job title and employer (if applicable)</li>
                            <li>General location</li>
                        </ul>

                        <p>
                            <strong className="text-white">d) Marketing and Communication Preferences</strong>
                        </p>
                        <p>We collect details on your preferences for receiving communications from us.</p>

                        <h3 className="text-xl font-semibold text-white">2. HOW WE USE THIS INFORMATION</h3>
                        <p>We use your data to:</p>
                        <ul className="list-disc pl-6 text-gray-300">
                            <li>Provide services and information you request</li>
                            <li>Send newsletters, updates, and marketing messages (with your consent)</li>
                            <li>Respond to inquiries</li>
                            <li>Improve website performance</li>
                            <li>Prevent fraud or security threats</li>
                        </ul>
                        <p>You can opt out of marketing communications at any time by clicking "unsubscribe" in our emails.</p>

                        <h3 className="text-xl font-semibold text-white">3. INFORMATION SHARING</h3>
                        <p>
                            <strong className="text-white">a) Within Timex Solution Inc</strong>
                        </p>
                        <p>We may share data within our company for business operations.</p>
                        <p>
                            <strong className="text-white">b) With Third-Party Service Providers</strong>
                        </p>
                        <p>We use trusted partners for tasks like email marketing and analytics.</p>
                        <p>
                            <strong className="text-white">c) Legal Compliance</strong>
                        </p>
                        <p>
                            We may disclose your data if required by law, court orders, or to prevent fraud and malicious activity.
                        </p>

                        <h3 className="text-xl font-semibold text-white">4. INTERNATIONAL DATA TRANSFERS</h3>
                        <p>
                            If we transfer data outside the U.S., we ensure adequate security measures in compliance with applicable
                            laws.
                        </p>

                        <h3 className="text-xl font-semibold text-white">5. YOUR RIGHTS</h3>
                        <p>You may have the following rights under applicable laws:</p>
                        <ul className="list-disc pl-6 text-gray-300">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your data</li>
                            <li>Object to data processing</li>
                        </ul>
                        <p>To exercise these rights, email us at team@timexsolutioninc.com.</p>

                        <h3 className="text-xl font-semibold text-white">6. COOKIE POLICY</h3>
                        <p>
                            We use cookies to enhance your experience. You can manage or disable cookies in your browser settings.
                        </p>

                        <h3 className="text-xl font-semibold text-white">7. CALIFORNIA PRIVACY RIGHTS (CCPA)</h3>
                        <p>
                            If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA),
                            including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-300">
                            <li>The right to know what personal information we collect</li>
                            <li>The right to request deletion of your data</li>
                            <li>The right to opt out of data sales (we do not sell your data)</li>
                        </ul>
                        <p>To make a CCPA request, email us at team@timexsolutioninc.com or call +1 559-505-3443.</p>

                        <h3 className="text-xl font-semibold text-white">8. UPDATES TO THIS POLICY</h3>
                        <p>We may update this policy from time to time. Please check back periodically for any changes.</p>
                        <p>
                            <strong className="text-white">Last Updated:</strong> {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
