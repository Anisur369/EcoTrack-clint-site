import SwiperCarousel from "../../components/common/SwiperCarousel";
import HeroBanner from "../../components/common/HeroBanner";
import LiveStatistics from "../../components/common/LiveStatistics";

const Home = () => {
  return (
    <section className="home">
      <SwiperCarousel />
      <HeroBanner
        featuredChallenges={[
          {
            id: 1,
            title: "Challenge 1",
            description: "Description of Challenge 1",
            image: "https://picsum.photos/600/300?1",
          },
          {
            id: 2,
            title: "Challenge 2",
            description: "Description of Challenge 2",
            image: "https://picsum.photos/600/300?2",
          },
          {
            id: 3,
            title: "Challenge 3",
            description: "Description of Challenge 3",
            image: "https://picsum.photos/600/300?3",
          },
        ]}
      />
      <LiveStatistics
        stats={{
          co2Saved: 1200,
          plasticReduced: 800,
        }}
      />
    </section>
  );
};

export default Home;
