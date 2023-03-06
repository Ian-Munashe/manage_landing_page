import Head from "next/head";
import {
  NavBar,
  Hero,
  Features,
  Testimonials,
  CTA,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage Landing Page</title>
      </Head>
      <NavBar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
