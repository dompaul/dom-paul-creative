import { Layout } from "components/Layout";
import { Hero } from "components/Hero";
import { Content } from "components/Content";
import { PathHeader } from "components/PathHeader";
import { ServiceWrapper } from "components/ServiceWrapper";
import { FeatureWrapper } from "components/FeatureWrapper";
import { About } from "components/About";
import { InstagramFeed } from "components/InstagramFeed";
import { SignUpForm } from "components/SignUpForm";
import { servicesMock } from "models/Service";
import { featuresMock } from "models/Feature";
import { photoListMock } from "models/Media";
import { ToastContainer } from "react-toastify";

const Home: React.FC = () => (
  <Layout>
    <Hero />
    <Content>
      {/* About section here */}
      <a className="anchor" id="about"></a>
      <PathHeader title="About" summary="Learn More" />
      <About />

      {/* Services section here */}
      <div className="anchor" id="services"></div>
      <PathHeader title="Services" summary="What I Do" />
      <ServiceWrapper services={servicesMock} />

      {/* Portfolio section here */}
      <div className="anchor" id="work"></div>
      <PathHeader title="Work" summary="My Portfolio" />
      <FeatureWrapper features={featuresMock} />

      {/* Photography section here */}
      <div className="anchor" id="photography"></div>
      <PathHeader title="Photography" summary="Recent Photos" />
      <InstagramFeed posts={photoListMock} />

      {/* Contact section here */}
      <div className="anchor" id="contact"></div>
      <PathHeader title="Contact" summary="Get in Touch" />
      <SignUpForm variant="2" />
    </Content>
    <ToastContainer style={{ width: "350px" }} />
  </Layout>
);

export default Home;
