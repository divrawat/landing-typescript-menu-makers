import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const Home: React.FC = () => {

  const head = () => {
    return (
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
  }

  return (
    <div className="dotted-bg">
      <Navbar />

      <div className='p-4 max-w-[1000px] mx-auto'>

        <h1 className='text-center text-3xl'>Privacy Policy</h1>

        <h2 className='text-2xl py-4'>Introduction</h2>

        <p className='text-[#3e3e3e] py-2 '>Welcome to Make My Menu Online. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our mobile application ("App").</p>


        <h2 className='text-2xl py-4'>Information We Collect</h2>

        <h3 className='text-xl'>Personal Information</h3>

        <p className='py-2 text-[#3e3e3e]'>When you use our App, we may collect personal information that can be used to identify you, such as:</p>

        <ul className='list-disc pl-8 text-[#3e3e3e]'>
          <li>Name</li>
          <li>Email address</li>
          <li>Contact number</li>
          <li>Payment information (if applicable)</li>
        </ul>

        <h3 className='text-xl py-3'>Non-Personal Information</h3>

        <p className='py-2 text-[#3e3e3e]'>We may also collect non-personal information that cannot be used to identify you, such as:</p>
        <ul className='list-disc pl-8 text-[#3e3e3e]'>
          <li>Device information (e.g., device type, operating system, and unique device identifiers)</li>
          <li>Usage data (e.g., time spent on the app, pages visited, and other usage patterns)</li>
        </ul>


        <h2 className='text-2xl py-4'>How We Use Your Information</h2>

        <h3 className='text-xl py-3'>Personal Information</h3>
        <p className='py-2 text-[#3e3e3e]'>We may use your personal information for the following purposes:</p>
        <ul className='list-disc pl-8 text-[#3e3e3e]'>
          <li>To provide and improve our services</li>
          <li>To communicate with you about your account or transactions</li>
          <li>To send you promotional materials or notifications about new features</li>
          <li>To process payments and prevent fraudulent transactions</li>
        </ul>



        <h3 className='text-xl'>Non Personal Information</h3>
        <p className='py-2 text-[#3e3e3e]'>We use non-personal information to:</p>
        <ul className='list-disc pl-8 text-[#3e3e3e]'>
          <li>Analyze usage patterns to improve our App</li>
          <li>Ensure the technical functionality of our services</li>
          <li>Improve user experience</li>
        </ul>


        <h2 className='text-2xl py-4'>Sharing Your Information</h2>

        <p className='text-[#3e3e3e] py-2 '>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
        <ul className='list-disc pl-8 text-[#3e3e3e]'>
          <li>With your consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect and defend our rights and property</li>
          <li>With trusted service providers who assist us in operating our App, conducting our business, or serving our users, provided they agree to keep this information confidential</li>
        </ul>






        <h2 className='text-2xl py-4'>Data Security</h2>


        <p className='py-2 text-[#3e3e3e]'>We implement various security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>


        <h2 className='text-2xl py-4'>Your Rights</h2>

        <p className='text-[#3e3e3e] py-2 '>You have the right to:</p>
        <ul className='list-disc pl-8 text-[#3e3e3e]'>
          <li>Access and review the personal information we hold about you</li>
          <li> Request corrections to any inaccurate or incomplete information</li>
          <li>Request the deletion of your personal information</li>
          <li>Object to the processing of your personal information</li>
          <li>Withdraw your consent to our use of your personal information at any time</li>
        </ul>



        <h2 className='text-2xl py-4'>Third-Party Links</h2>

        <p className='text-[#3e3e3e] py-2 '>Our App may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies before providing any personal information.</p>



        <h2 className='text-2xl py-4'>Changes to This Privacy Policy</h2>

        <p className='text-[#3e3e3e] py-2 '>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this Privacy Policy periodically for any updates.</p>


        <h2 className='text-2xl py-4'>Contact Us</h2>

        <p className='text-[#3e3e3e] py-2 '>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <ul className='list-disc text-[#3e3e3e] pl-8'>
          <li> Email: support@makemymenuonline.com</li>
          <li> Address: [Your Company Address]</li>
        </ul>

        <p className='py-2 text-[#3e3e3e]'>By using our App, you consent to our Privacy Policy.</p>


      </div>

      <Footer />
    </div>
  );
};

export default Home;
