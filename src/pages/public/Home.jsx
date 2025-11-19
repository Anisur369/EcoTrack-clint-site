import SwiperCarousel from "../../components/home/SwiperCarousel";
import ActiveChallenges from "../../components/home/ActiveChallenges";
import RecentTips from "../../components/home/RecentTips";
import UpcomingEvents from "../../components/home/UpcomingEvents";
import WhyGoGreen from "../../components/home/WhyGoGreen";
import HowItWorks from "../../components/home/HowItWorks";

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
