import React, { useState, useEffect, Suspense, lazy } from "react";
import Menubar from "./Layout/Menubar";
import PlaceHoverLoading from "./Layout/PlaceHoverLoading";
import Footer from "./Layout/Footer"; // Assuming you still want to keep Footer always loaded

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [MainSlide, setMainSlide] = useState(null);
  const [OurService, setOurService] = useState(null);
  const [AboutUs, setAboutUs] = useState(null);
  const [ChooseUs, setChooseUs] = useState(null);
  const [Feedback, setFeedback] = useState(null);
  const [WebsiteDemo, setWebsiteDemo] = useState(null);
  const [ContactUs, setContactUs] = useState(null);
  const [Partner, setPartner] = useState(null);

  useEffect(() => {
    const loadComponents = async () => {
      const [
        { default: LoadedMainSlide },
        { default: LoadedOurService },
        { default: LoadedAboutUs },
        { default: LoadedChooseUs },
        { default: LoadedFeedback },
        { default: LoadedWebsiteDemo },
        { default: LoadedContactUs },
        { default: LoadedPartner },
      ] = await Promise.all([
        import("./Layout/MainSlide"),
        import("./Layout/OurService"),
        import("./Layout/AboutUs"),
        import("./Layout/ChooseUs"),
        import("./Layout/Feedback"),
        import("./Layout/WebsiteDemo"),
        import("./Layout/ContactUs"),
        import("./Layout/Partner"),
      ]);
      setMainSlide(() => LoadedMainSlide);
      setOurService(() => LoadedOurService);
      setAboutUs(() => LoadedAboutUs);
      setChooseUs(() => LoadedChooseUs);
      setFeedback(() => LoadedFeedback);
      setWebsiteDemo(() => LoadedWebsiteDemo);
      setContactUs(() => LoadedContactUs);
      setPartner(() => LoadedPartner);
      setLoading(false);
    };

    loadComponents();
  }, []);

  return (
    <>
      <Menubar />
      {loading ? (<PlaceHoverLoading />) : 
      (
        <Suspense>
          <MainSlide />
          <OurService />
          <AboutUs />
          <ChooseUs />
          <Feedback />
          <WebsiteDemo />
          <ContactUs />
          <Partner />
        </Suspense>
      )}
      <Footer />
    </>
  );
};

export default Home;
