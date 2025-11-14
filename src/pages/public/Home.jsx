import SwiperCarousel from "../../components/common/SwiperCarousel";
import ActiveChallenges from "../../components/common/ActiveChallenges";
import RecentTips from "../../components/common/RecentTips";
import UpcomingEvents from "../../components/common/UpcomingEvents";
import WhyGoGreen from "../../components/common/WhyGoGreen";
import HowItWorks from "../../components/common/HowItWorks";

const Home = () => {
  return (
    <section className="home">
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