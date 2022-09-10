import { Parallax } from 'react-parallax';

import Emergence from '../animations/Emergence';

import backgroundImage from '../../images/gray-bg.jpg';

type Props = {
  children: JSX.Element;
  title?: string[];
  background?: 'light' | 'primary' | 'parallax' | 'dark';
};

export default function Button({ children, title, background }: Props) {
  const backgroundColor = () => {
    if (background === 'light') {
      return 'general-section--light';
    } else if (background === 'primary') {
      return 'general-section--primary';
    } else if (background === 'dark') {
      return 'general-section--dark';
    } else if (background === 'parallax') {
      return 'general-section--parallax';
    }

    return '';
  };

  const content = (): JSX.Element => {
    return (
      <section className={`general-section ${backgroundColor()}`}>
        <>
          {title ? (
            <Emergence>
              <h2>
                {title[0]} <span>{title[1]}</span>
              </h2>
            </Emergence>
          ) : null}

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
