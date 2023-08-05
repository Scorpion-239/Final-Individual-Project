import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    minHeight: '100vh', // Ensure the content takes the full viewport height
    padding: '20px',
  };

  const contentStyle = {
    maxWidth: '800px',
    textAlign: 'center',
    color: 'red', // Text color set to red
  };



  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div style={pageStyle}>
        <div style={contentStyle}>
          <h1>Privacy Policy</h1>
          <p>
            We are committed to protecting your privacy and ensuring the security
            of your personal information. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your data when you interact with our website and services.
          </p>
          <h2>Information We Collect</h2>
          <p>
            When you visit our website, we may collect certain information automatically from your
            device, including your IP address, browser type, operating system, and browsing activity.
            We also use cookies and similar technologies to enhance your browsing experience and
            gather information about how you use our website.
          </p>
          <p>
            If you choose to provide us with personal information, such as your name, email address,
            we will use this information to respond to your inquiries, process your
            orders, and improve our services. We do not sell, rent, or share your personal information
            with third parties for marketing purposes.
          </p>
          <h2>Security of Your Information</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access,
            use, or disclosure. However, please note that no data transmission over the internet or
            electronic storage method is completely secure. While we strive to protect your data, we
            cannot guarantee its absolute security.
          </p>
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. Please be aware that
            we are not responsible for the content or privacy practices of these third-party sites.
            We encourage you to review their privacy policies before providing any personal information.
          </p>
          <h2>Updates to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or for other operational, legal, or regulatory reasons. We will notify you of any significant
            changes by posting the revised policy on our website or by other means as required by law.
            Please check this page periodically to stay informed about our latest privacy practices.
          </p>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at
            privacy@personalPotfolio.com.
          </p>
        </div>
      </div>
      <footer className="footer">
        <ul>
          <li><a href="https://github.com/Scorpion-239">Github</a></li>
          <li><a href="https://www.linkedin.com/in/ahmer-mustafa-5a110a218/">Linkedin</a></li>
          <li><div>
      <Link href="/privacy_policy">
        Privacy Policy
      </Link>
    </div></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Ahmer Mustafa. All rights reserved.</p>
      </footer>

    </>
    
  );
};

export default PrivacyPolicyPage;
