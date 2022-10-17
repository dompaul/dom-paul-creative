import { GetStaticProps } from 'next';

import { getSortedPostsData } from '../lib/posts';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Content } from '../components/Content';
import { PathHeader } from '../components/PathHeader';
import { ServiceWrapper } from 'components/ServiceWrapper';
import { FeatureWrapper } from 'components/FeatureWrapper';
import { servicesMock } from 'models/Service';
import { featuresMock } from 'models/Feature';

const Home: React.FC = () => (
  <Layout>
    <Hero />
    <Content>
      {/* Services section here */}
      <PathHeader title="Services" summary="What I Do" />
      <ServiceWrapper services={servicesMock} />

      {/* Portfolio section here */}
      <PathHeader title="Work" summary="My Portfolio" />
      <FeatureWrapper features={featuresMock} />

      {/* About section here */}
      <PathHeader title="About" summary="Learn More" />

      {/* Contact section here */}
      <PathHeader title="Contact" summary="Get in Touch" />
    </Content>

    <div className="body"></div>
  </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};
