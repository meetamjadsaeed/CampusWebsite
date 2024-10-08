import Head from "next/head";
// import Image from "next/image";
// import cardStyles from "../Assets/Styles/Card/Card.module.css";
import Header from "../layout/Header/Header";
import MainHero from "../layout/MainHero";
import Slider from "../components/slider/MainSlider";
import Main from "../components/card/Main";
import Group from "../components/card/Group";
import Programs from "../components/card/Programs";
import Gallery from "../components/card/Gallery";
import Scholarships from "../components/card/Scholarships";
import Footer from "../layout/Footer/Footer";

const mission = () => {
  return (
    <>
      <Head>
        <title>SIBA KDK</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MainHero
        data={{
          content:
            "The mission of Sukkur IBA is to contribute and serve community by imparting knowledge through innovative teaching and applied research at the global levels of excellence. We aim to establish and sustain a competitive meritorious environment by strengthening faculty and using state-of-the-art technology to produce graduates with analytical & creative thinking, leadership skills and entrepreneurial spirit, who possess global outlook and are conscious of ethical values.",
        }}
      />
      <Footer />
    </>
  );
};

export default mission;
