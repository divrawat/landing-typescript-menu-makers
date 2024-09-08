import Navbar from '../components/Navbar';
import TopComponent from '../components/TopComponent';
import Footer from '../components/Footer';
import SecondComponent from '../components/SecondComponent';
import ThirdComponent from '../components/ThirdComponent';
import FAQ from '../components/FAQComponent';
import ThreePhotosComponent from '../components/ThreePhotosComponent';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="dotted-bg">
      <Navbar />
      <TopComponent />

      <div className="text-center mt-16 px-4">
        <h2 className="font-bold text-4xl text-[#1a1a1a] dark:text-white">
          Platform Integration
        </h2>
        <p className="max-w-[800px] my-5 mx-auto text-[#414040] dark:text-[whitesmoke]">
          Seamlessly integrate with popular food delivery platforms across India, offering exclusive deals to enhance the user experience
        </p>
      </div>

      <ThreePhotosComponent />

      <SecondComponent />
      <ThirdComponent />

      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
