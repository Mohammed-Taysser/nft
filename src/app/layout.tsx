import Base from '@/layouts/Base';
import favicon from '../../public/images/icons/favicon.ico';
import './globals.scss';

function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <link rel='icon' href={favicon.src} />

      <body>
        <Base>{props.children}</Base>
      </body>
    </html>
  );
}

export default RootLayout;
