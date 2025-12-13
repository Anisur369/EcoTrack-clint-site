import SwiperCarousel from "../../components/home/SwiperCarousel";
import ActiveChallenges from "../../components/home/ActiveChallenges";
import RecentTips from "../../components/home/RecentTips";
import UpcomingEvents from "../../components/home/UpcomingEvents";
import WhyGoGreen from "../../components/home/WhyGoGreen";
import HowItWorks from "../../components/home/HowItWorks";
import React from "react";

import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { ToastContainer } = React.useContext(AuthContext);
  return (
    <section className="home">
      <ToastContainer />
      <SwiperCarousel />
      <ActiveChallenges />
      <RecentTips />
      <UpcomingEvents />
      <WhyGoGreen />
      <HowItWorks />
    </section>
  );
};

export default Home;
