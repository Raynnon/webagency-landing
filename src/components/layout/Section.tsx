import { Parallax } from 'react-parallax';

import Emergence from '../animations/Emergence';

import backgroundImage from '../../images/gray-bg.jpg';

type Props = {
  children: JSX.Element;
  title: string[];
  background?: 'light' | 'primary' | 'parallax';
};

export default function Button({ children, title, background }: Props) {
  const backgroundColor = () => {
    if (background === 'light') {
      return 'general-section--light';
    } else if (background === 'primary') {
      return 'general-section--primary';
    }

    return '';
  };

  const content = (): JSX.Element => {
    return (
      <section className={`general-section ${backgroundColor()}`}>
        <>
          <Emergence>
            <h2>
              {title[0]} <span>{title[1]}</span>
            </h2>
          </Emergence>
          {children}
        </>
      </section>
    );
  };

  return (
    <>
      {background === 'parallax' ? (
        <Parallax bgImage={backgroundImage} strength={400}>
          {content()}
        </Parallax>
      ) : (
        <>{content()}</>
      )}
    </>
  );
}
