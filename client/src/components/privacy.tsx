import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-25 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="size-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="border-b border-gray-200 pb-8 mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last Updated: November 7, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-10">
          <p className="mb-10">
            Welcome to <strong>loop</strong> ("we," "our," or "us"). We are
            committed to protecting your personal information and your right to
            privacy. If you have any questions or concerns about this privacy
            notice or our practices with regards to your personal information,
            contact us at{" "}
            <a
              href="mailto:ezekielarkohamissah@gmail.com"
              aria-label="Send an email"
            >
              <strong>ezekielarkohamissah@gmail.com</strong>
            </a>
            .
          </p>

          <div>
            <h3 className="font-bold mb-1.5">1. Information We Collect</h3>
            <p>
              We collect personal information that you voluntarily provide to us
              when you register on the website, express an interest in obtaining
              information about us or our products and services, or otherwise
              when you contact us.
            </p>
            <ul className="list-disc pt-1.5 pl-5 space-y-2">
              <li>
                <strong>Log and Usage Data:</strong> Log data usage
                service-related, diagnostic, usage and performance information
                our servers automatically collect when you access or use our
                website.
              </li>
              <li>
                <strong>Device Data:</strong> We collect device data such as
                information about your computer, phone, tablet, or other devices
                you use to access the website. This includes your IP address,
                which we use to determine your approximate location (country) to
                personalize your experience.
              </li>
              <li>
                <strong>Social Media Login Data:</strong> We provide you with
                the option to register with us using your existing social media
                account details, specifically <strong>Google</strong> and{" "}
                <strong>GitHub</strong>. If you choose to register in this way,
                we collect the information described in the section called "How
                do we handle your social logins" below.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-1.5">
              2. How We Handle Your Social Logins
            </h3>
            <p>
              Our application offers you the ability to register and log in
              using your third-party social media account details (Google and
              GitHub). Where you choose to do this, we will receive certain
              profile information about you from your social media provider.
            </p>
            <p>
              The profile information we receive may vary depending on the
              social media provider concerned, but will often include your{" "}
              <strong>name</strong>, <strong>email address</strong>, and or{" "}
              <strong>profile picture</strong>.
            </p>
            <p>
              We use the information we receive only for the purposes that are
              described in this privacy notice to authenticate your identity and
              create your user account on loop.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-1.5">3. How We Use Your Information</h3>
            <p>
              We use personal information collected via our website for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests and/or with your consent.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>
                  To facilitate account creation and logon process.
                </strong>
              </li>
              <li>
                <strong>To save your preferences:</strong> We store your
                bookmarked articles associated with your account ID.
              </li>
              <li>
                <strong>To Request Feedback:</strong> We may use your
                information to request feedback and to contact you about your
                use of our website.
              </li>
              <li>
                <strong>To manage user accounts.</strong>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-1.5">
              4. Will Your Information Be Shared With Anyone?
            </h3>
            <p>
              We strictly <strong>do not sell</strong>, trade, or rent your
              personal information to third parties. We only share information
              with the following third parties solely for the purpose of hosting
              and maintaining our application:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Hosting Services:</strong> Vercel (Frontend), Render
                (Backend).
              </li>
              <li>
                <strong>Database Services:</strong> MongoDB Atlas.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-1.5">
              5. How Long Do We Keep Your Information?
            </h3>
            <p>
              We keep your information for as long as necessary to fulfill the
              purposes outlined in this privacy notice unless otherwise required
              by law. If you delete your account, your personal information is
              removed from our active databases.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-1.5">6. Your Privacy Rights</h3>
            <p>
              You may review, change, or terminate your account at any time.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Account Termination:</strong> You can delete your
                account permanently through the "Settings" page on our website.
                Upon deletion, all your data, including bookmarks and personal
                details, will be removed from our system.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-1.5">7. Contact Us</h3>
            <p>
              If you have questions or comments about this policy, you may email
              us at{" "}
              <a
                href="mailto:ezekielarkohamissah@gmail.com"
                aria-label="Send an email"
              >
                <strong>ezekielarkohamissah@gmail.com</strong>
              </a>
              .
            </p>
          </div>
        </div>

        <div className="h-20"></div>
      </div>
    </div>
  );
}
