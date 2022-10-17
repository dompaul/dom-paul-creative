import cn from 'classnames';
import { videoListMock } from 'models/Media/MediaMock';
import { HeroCarousel } from 'components/HeroCarousel';

import styles from './About.module.scss';

export const About: React.FC = () => {
  return (
    <div className={cn(styles['about'])}>
      <div className={styles['about__media']}>
        <HeroCarousel
          list={videoListMock}
          classNames="hero-carousel--about"
          alignment="left"
          type="video"
          split={true}
        />
      </div>
      <div className={styles['about__content']}>
        <h2 className={styles['about__quote']}>
          The innovative Botanical Shower® beauty product.
        </h2>
        <p className={styles['about__text']}>
          This is made from natural and organic elements that may beautify,
          detoxify and may promote increased and/or sustainable wellbeing with
          every use. This is also an inspiring way to change your guest room
          shower into an extraordinary one and to give customers a therapeutic
          spa EXPERIENCE in the comfort of their guest room that they will never
          forget. The Botanical shower spa beauty bar is placed into a shower
          casing device, which can easily be attached to any compatible shower
          apparatus.
        </p>
        <p className={styles['about__text']}>
          The device has been designed to complement most hotel bathroom décor.
          The beauty bar dissolves into the water flow, through the shower and
          onto the body giving customers soapy bubbles, an exhilarating
          fragrance, a mild cleansing surfactant, and skin conditioning
          ingredients. With its slow dissolving elements, it is intended to last
          up to 10 minutes or more before totally melting away in the water
          flow. Spa UR Self currently offers five different beauty cleansing
          bars, which are Vanilla, Gooseberry, Rose, Carrot tissue, and
          Calendula infused bars. This product will be available to a wide range
          of selected hotels in the UK and abroad that have compatible shower
          apparatus.
        </p>
      </div>
    </div>
  );
};
