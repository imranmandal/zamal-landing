import CardSection from "@/components/HomeComponent/CardSection";
import HeroImageSection from "@/components/HomeComponent/HeroImageSection";
import Testimonials from "@/components/HomeComponent/Testimonials";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout title="ZAMAL CIVIL CONTRACTOR AND DEVELOPER">
        <HeroImageSection />
        <CardSection />
        <Testimonials />
      </Layout>
    </>
  );
}
