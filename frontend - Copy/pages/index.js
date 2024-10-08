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

const Home = () => {
  return (
    <>
      <Head>
        <title>SIBA KDK</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <Header />
      {/* 
      <MainHero
        data={{
          // content: "",
          videoUrl: "https://www.youtube.com/watch?v=a6R32cP23N0&ab_channel=GreenTimelapse",
        }}
      /> */}
      <MainHero
        data={{
          content: null,
          videoUrl: null,
        }}
      />
      <div className="container">
        {/* <Slider /> */}
        <Main />
        <Group />
        <Programs />
        <Gallery />
        <Scholarships />
      </div>
      <Footer />
    </>
  );
};

export default Home;
