import Layout from "@/components/layout";
import { CheckCircle, Eye, FileText, Lock, Shield, Users } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              Your Privacy and Data Protection Rights
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800 mb-0">
                    Last Updated
                  </h2>
                </div>
                <p className="text-gray-700 mb-0">
                  This Privacy Policy was last updated on December 2024. We may
                  update this policy from time to time, and we will notify you
                  of any changes by posting the new Privacy Policy on this page.
                </p>
              </div>

              <div className="space-y-8">
                {/* Introduction */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    <FileText className="w-8 h-8 text-orange-600 mr-3" />
                    Introduction
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Evergreen Intelligent Company Ltd ("we," "our," or
                    "us") is committed to protecting your privacy. This Privacy
                    Policy explains how we collect, use, disclose, and safeguard
                    your information when you visit our website or use our
                    services.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By using our website or services, you agree to the
                    collection and use of information in accordance with this
                    policy.
                  </p>
                </div>

                {/* Information We Collect */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    <Eye className="w-8 h-8 text-orange-600 mr-3" />
                    Information We Collect
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Personal Information
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        We may collect personal information that you voluntarily
                        provide to us, including:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>
                          Name and contact information (email address, phone
                          number, mailing address)
                        </li>
                        <li>Company information and job title</li>
                        <li>Project details and requirements</li>
                        <li>Communication preferences</li>
                        <li>Any other information you choose to provide</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Automatically Collected Information
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        When you visit our website, we may automatically collect
                        certain information, including:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>IP address and location data</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages visited and time spent on our website</li>
                        <li>Referring website information</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How We Use Information */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    <Users className="w-8 h-8 text-orange-600 mr-3" />
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use the collected information for various purposes,
                    including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Providing and maintaining our services</li>
                    <li>Responding to your inquiries and requests</li>
                    <li>Processing project proposals and contracts</li>
                    <li>Improving our website and services</li>
                    <li>
                      Sending you updates about our services (with your consent)
                    </li>
                    <li>Complying with legal obligations</li>
                    <li>Protecting against fraud and unauthorized access</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    <Lock className="w-8 h-8 text-orange-600 mr-3" />
                    Information Sharing and Disclosure
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties, except in the following
                    circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>
                      With trusted service providers who assist us in operating
                      our business
                    </li>
                    <li>
                      In connection with a business transfer or acquisition
                    </li>
                  </ul>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    <Shield className="w-8 h-8 text-orange-600 mr-3" />
                    Data Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction. However, no method of transmission over the
                    internet or electronic storage is 100% secure.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold text-green-800">
                        Security Measures Include:
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-green-700 space-y-1 ml-6">
                      <li>Encryption of sensitive data</li>
                      <li>Regular security assessments</li>
                      <li>Access controls and authentication</li>
                      <li>Secure data transmission protocols</li>
                    </ul>
                  </div>
                </div>

                {/* Your Rights */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    <Users className="w-8 h-8 text-orange-600 mr-3" />
                    Your Rights
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You have certain rights regarding your personal information,
                    including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to request deletion of your information</li>
                    <li>
                      The right to object to processing of your information
                    </li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent at any time</li>
                  </ul>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance
                    your experience on our website. You can control cookie
                    settings through your browser preferences.
                  </p>
                </div>

                {/* Third-Party Links */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Third-Party Links
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our website may contain links to third-party websites. We
                    are not responsible for the privacy practices or content of
                    these external sites. We encourage you to review their
                    privacy policies.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Children's Privacy
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our services are not intended for children under 13 years of
                    age. We do not knowingly collect personal information from
                    children under 13.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the "Last Updated" date.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Contact Us
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Email:</strong> info@evergreen.sa
                    </p>
                    <p>
                      <strong>Phone:</strong> 0559481660
                    </p>
                    <p>
                      <strong>Address:</strong> Al Nuzha, Jeddah, Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
