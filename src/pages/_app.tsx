import { AppProps } from 'next/app';

import '../stylesheets/_typography.scss';
import '../stylesheets/_burger-menu.scss';
import '../stylesheets/_animations.scss';
import '../stylesheets/_global.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
