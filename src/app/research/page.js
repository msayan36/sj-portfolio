import Link from "next/link";
import Publish from "../components/Publish";
import './style.css';
import { FaGoogleScholar, FaResearchgate, FaOrcid } from "react-icons/fa6";
import { SiPublons } from "react-icons/si";
import Footer from "../components/Footer"

const Research = () => {
  return (
    <>
    <nav className="navbar">
        <Link href="/">
          <h1 className="title">Dr. Susovan Jana</h1>
        </Link>
        <ul className="menu">
            <li>
              <Link href="/teaching">
                Teaching
              </Link>
            </li>
            <li>
              <Link href="/research">
                Research
              </Link>
            </li>
            <li>
              <Link href="/experience">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/academics">
                Academics
              </Link>
            </li>
            <li>
              <Link href="/achievements">
                Achievements
              </Link>
            </li>
            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
        </ul>
    </nav>
    <section className="research-section">
        <h1 className='research-head'>Research</h1>
        <div className="research-content-1">
            <div className="research-interest">
                <h2>Research Interests</h2>
                <ul className="research-list">
                    <li>Image Processing</li>
                    <li>Pattern Recognition</li>
                    <li>Medical Imaging</li>
                    <li>Machine Learning</li>
                    <li>Computer Vision</li>
                    <li>Multimedia Information Processing</li>
                </ul>
            </div>
            <div className="research-profile">
              <div className="content-left">
                  <h2>Academic Profile</h2>
                  <div className="research-content-icons">
                      <FaGoogleScholar />
                      <FaResearchgate />
                      <FaOrcid />
                      <SiPublons />
                  </div>
              </div>
            </div>
        </div>
        <div className="research-content-2">
            <div className="content-right">
                <h3>Research Articles in Journals:</h3>
                <Publish author="D. Tamili, S. Jana, and P. Bhattacharjee" title="Chromatographic method development for simultaneous determination of serotonin, melatonin, and L-tryptophan: Mass transfer modeling, chromatographic separation factors, and method prediction by artificial neural network," journal="Journal of Chemometrics. 2023;e3520" link="/" />
                <Publish author="S. Jana, B. Sarkar, R. Parekh, and S. Nath" title="AN INTEGRATED FRAMEWORK FOR QUALITY EVALUATION OF FRUITS AND VEGETABLE STORE LOCATED IN THE SUPERMARKET UNDER UTOPIAN ENVIRONMENT," journal="International Journal of Industrial Engineering: Theory, Application and Practice, vol. 30, no. 1, 2023" link="/" />
                <Publish author="S. Jana, B. Sarkar, and R. Parekh" title="An Integrated Framework for the Performance Evaluation of Fruits and Vegetable Store Located in a Supermarket," journal=" Trends in Sciences, vol. 19, no. 3, pp. 2073, 2022" link="/" />
                <Publish author="S. Jana, R. Parekh, and B. Sarkar" title="A De novo approach for automatic volume and mass estimation of fruits and vegetables," journal="Optik, vol. 200, p. 163443, Jan. 2020" link="/" />
                <Publish author="S. Jana and R. Parekh" title="Intra-class Recognition of Fruits using Color and Texture Features with Neural Classifiers," journal="International Journal of Computer Applications, vol. 148, no. 11, pp. 1–6, Aug. 2016" link="/" />
                <h3>Book Chapters:</h3>
                <Publish author="S. Jana, R. Parekh, and B. Sarkar" title="Detection of Rotten Fruits and Vegetables using Deep Learning," journal="Computer Vision and Machine Learning in Agriculture, Algorithms for Intelligent Systems, Springer, Singapore, pp. 31-49, 2021" link="/" />
                <Publish author="S. Jana, R. Parekh, and B. Sarkar" title="A semi-supervised approach for automatic detection and segmentation of optic disc from retinal fundus image" journal="Handbook of Computational Intelligence in Biomedical Engineering and Healthcare, Academic Press, pp. 65-91, 2021" link="/" />
                <Publish author="S. Jana, R. Parekh, and B. Sarkar" title="Automatic Classification of Fruits and Vegetables: A Texture-Based Approach" journal="Algorithms in Machine Learning Paradigms, Studies in Computational Intelligence, Springer, Singapore, vol 870, pp. 71–89, 2020" link="/" />
                <h3>Research Article Conferences:</h3>
                <Publish author="S. Chakraborty and S. Jana" title="An Integrated Framework for Smart Monitoring of Orange Orchard" journal="7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech) - IEMENTech2023, IEEE, Dec, 2023" link="/" />
                <Publish author="S. Banerjee, S. Datta, D. Ghosh, and S. Jana" title="A Secure Text Steganography using Randomized Mathematical Functions and LSB" journal=" 7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech) - IEMENTech2023, IEEE, Dec, 2023" link="/" />
                <Publish author="S. Chakraborty and S. Jana" title="Early Prediction of Cataract using Convolutional Neural Network" journal="2023 IEEE Devices for Integrated Circuit (DevIC), Kalyani, India, 2023, pp. 446-450" link="/" />
                <Publish author="A. Paria, and S. Jana" title="Prediction of Crops Production Using Random Forest Regression" journal="International Conference on Computational Intelligence, Data Science and Cloud Computing, pp. 97-106, Springer, Dec. 2021" link="/" />
                <Publish author="S. Jana" title="A Comparative Study on Reassembly of Image Fragments" journal="International Conference on Computational Intelligence, Data Science and Cloud Computing, pp. 235-242, Springer, Dec. 2021" link="/" />
                <Publish author="S. Jana, B. Sarkar, and R. Parekh" title="A Holistic Framework for Quality Evaluation of Fruits and Vegetables Suppliers" journal="International Conference on Computational Intelligence, Data Science and Cloud Computing, pp 155-168, Springer, Sept. 2020" link="/" />
                <Publish author="S. Jana, R. Parekh, and B. Sarkar" title="Automated Sorting of Rotten or Defective Fruits and Vegetables using Convolutional Neural Network" journal=" International Conference on Computational Intelligence, Data Science and Cloud Computing, pp 43-55, Springer, Sept. 2020" link="/" />
                <Publish author="S. Dutta, S. Mukherjee, S. Jana, M. Nag and S. Majumdar" title="Dataset Annotation on Chronic Disease Comorbidities Study in Type 2 Diabetes Mellitus" journal="International Conference on Machine Intelligence and Data Science Applications (MIDAS), pp. 713-725, Springer, 2020" link="/" />
                <Publish author="U. R. Chowdhury, S. Jana, and R. Parekh" title="Automated System for Indian Banknote Recognition using Image Processing and Deep Learning" journal="2020 International Conference on Computer Science, Engineering and Applications (ICCSEA), pp. 1-5, IEEE, Mar. 2020" link="/" />
                <Publish author="S. Jana, R. Parekh, and B. Sarkar" title="Volume estimation of non-axisymmetric fruits and vegetables using image analysis" journal="2019 International Conference on Computing, Power and Communication Technologies, pp. 628-633, IEEE, Sept. 2019" link="/" />
                <Publish author="S. Jana, R. Parekh, and B. Sarkar" title="An Approach Towards Classification of Fruits and Vegetables Using Fractal Analysis" journal="Computational Intelligence, Communications, and Business Analytics, Springer, pp. 167–180, 2019" link="/" />
                <Publish author="C. Ganguly, S. Jana, and R. Parekh" title="Geometrical Transformation Invariant Approach for Classification of Signatures Using k-NN Classifier" journal="Computational Intelligence, Communications, and Business Analytics, Springer, pp. 106–120, 2019" link="/" />
                <Publish author="S. Pal, S. Jana, and R. Parekh" title="Super-Resolution of Textual Images using Autoencoders for Text Identification" journal="2018 Applied Signal Processing Conference (ASPCON), pp. 153-157, IEEE, Dec. 2018" link="/" />
                <Publish author="M. Tewari, S. Jana, and R. Parekh" title="An Automated System for Image Reconstruction from Distorted Image Fragments" journal=" 2017 International Conference on Computer, Electrical & Communication Engineering (ICCECE), pp. 1-6, IEEE, Dec. 2017" link="/" />
                <Publish author="K. Hossain, S. Jana, S. Mukherjee, and R. Parekh" title="Secured transmission of sensitive images of skin diseases using steganography and cryptography" journal="2017 Calcutta Conference (CALCON), pp. 95-99, IEEE, Dec. 2017" link="/" />
                <Publish author="K. Hossain, S. Jana, S. Mukherjee, and R. Parekh" title="A novel approach to secure biomedical images and videos for transmission" journal="2017 Third International Conference on Research in Computational Intelligence and Communication Networks (ICRCICN), pp. 120-125, IEEE, Nov. 2017" link="/" />
                <Publish author="S. Jana and R. Parekh" title="Shape-based Fruit Recognition and Classification" journal="Computational Intelligence, Communications, and Business Analytics, Springer, pp. 184–196, 2017" link="/" />
                <Publish author="S. Jana, S. Basak, and R. Parekh" title="Automatic fruit recognition from natural images using color and texture features" journal="2017 Devices for Integrated Circuit (DevIC), pp. 620-624, IEEE, Mar. 2017" link="/" />
                <Publish author="S. Jana and M. Chattopadhyay" title="An event-driven university campus navigation system on android platform" journal="2015 Applications and Innovations in Mobile Computing (AIMoC), p. 182-187, IEEE, Feb. 2015" link="/" />
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Research