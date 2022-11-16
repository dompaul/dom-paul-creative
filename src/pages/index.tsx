import { Layout } from "components/layout/Layout";
import { Hero } from "components/heroes/Hero";
import { Content } from "components/layout/Content";
import { PathHeader } from "components/common/PathHeader";
import { ServiceWrapper } from "components/services/ServiceWrapper";
import { FeatureWrapper } from "components/features/FeatureWrapper";
import { About } from "components/common/About";
import { InstagramFeed } from "components/instagram/InstagramFeed";
import { SignUpForm } from "components/common/SignUpForm";
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
