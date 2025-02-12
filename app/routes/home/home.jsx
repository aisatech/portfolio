import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import brhPhone from '~/assets/brh-mobile.png';
import brhHome from '~/assets/brh-home-mobile.png';
import capaStone from '~/assets/Cover.png';
import brhLaptop from '~/assets/brh-tela-large.png';
import stnPos from '~/assets/Tela_Campanha.png';
import stnRecibos from '~/assets/BobinasA8.png';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Porfólio de ${config.name} — product designer e desenvolvedora júnior`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="BridgeHub: uma ponte para investidores e startups"
        description="Desenhei e participei do desenvolvimento de uma plataforma 
        de equity crowdfunding para startups e investidores. Este produto foi adquirido pelo BTG Pactual."
        buttonText="Ver projeto"
        buttonLink="/projects/bridgehub"
        model={{
          type: 'phone',
          alt: 'Tela inicial para investidores na plataforma BridgeHub',
          textures: [
            {
              srcSet: `${brhPhone} 375w, ${brhPhone} 750w`,
              placeholder: sprTexturePlaceholder,
            },
      
              {
                srcSet: `${brhHome} 375w, ${brhHome} 750w`,
                placeholder: sliceTexturePlaceholder,
              },
          ],
        }}
      />
      <ProjectSummary

        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Novo modelo de campanhas no POS"
        description="Participei do desenvolvimento de um modelo unificado para a divulgação de campanhas no POS das marcas Ton e Stone, otimizando o uso de dados móveis e gerando economia para a companhia."
        buttonText="Ver projeto"
        buttonLink="/projects/stonepos"
        model={{
          type: 'credito',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${stnRecibos} 375w, ${stnRecibos} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },

            {
              srcSet: `${stnPos} 375w, ${stnPos} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
          
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Otimização de artigos internos para treinamento de pessoal e LLM's"
        description="Protagonizei um projeto interno que consistiu em otimizar artigos para o treinamento de pessoal e também de LLM's da própria companhia. "
        buttonText="Entre em contato para saber mais"
        buttonLink="/projects/projetointerno"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${capaStone} 800w, ${capaStone} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
