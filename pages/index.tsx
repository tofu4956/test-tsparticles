import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Particles from "react-tsparticles";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="test tsParticles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
          options={{
            background: {
              color: {
                value: "#000000",
              },
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
            fullScreen: {
              zIndex: -1,
            },
            interactivity: {
              events: {
                onHover: {
                  mode: "trail",
                  enable: true,
                },
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                grab: {
                  distance: 400,
                },
                light: {
                  area: {
                    gradient: {
                      start: "#ffffff",
                      stop: "#000000",
                    },
                    radius: 1000,
                  },
                  shadow: {
                    color: "#000000",
                    length: 2000,
                  },
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                trail: {
                  delay: 0.005,
                  quantity: 5,
                  pauseOnStop: true,
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    collisions: {
                      enable: false,
                    },
                    links: {
                      enable: false,
                    },
                    move: {
                      outModes: {
                        default: "destroy",
                      },
                      speed: 2,
                    },
                    size: {
                      value: 2,
                      animation: {
                        enable: true,
                        speed: 1,
                        minimumValue: 0.5,
                        sync: true,
                        startValue: "min",
                        destroy: "max",
                      },
                    },
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: {
                  value: "#ffffff",
                },
                distance: 150,
                enable: true,
                opacity: 0.4,
              },
              move: {
                attract: {
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                enable: true,
                outModes: {
                  default: "bounce",
                  bottom: "bounce",
                  left: "bounce",
                  right: "bounce",
                  top: "bounce",
                },
              },
              number: {
                value: 80,
              },
              opacity: {
                random: {
                  enable: true,
                  minimumValue: 0.3,
                },
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: 0.4,
                  minimumValue: 0.1,
                },
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.2,
                },
                value: {
                  min: 1,
                  max: 4,
                },
                animation: {
                  speed: 20,
                  minimumValue: 0.1,
                },
              },
            },
          }}
        />
      <main className={styles.main}>
 
          <h1>admireve.ga</h1>
      </main>
    </div>
  );
};

export default Home;
