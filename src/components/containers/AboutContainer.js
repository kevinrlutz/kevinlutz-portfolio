import WelcomeComponent from '../WelcomeComponent';
import ColorBends from '../ColorBends';
import './AboutContainer.css';

function AboutContainer() {
  return (
    <div className="about-container">
        <ColorBends
          colors={["#003E60", "#8a5cff", "#1EE6A3"]}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.45}
          noise={0.35}
          parallax={0.65}
          iterations={2}
          intensity={1.5}
          bandWidth={5}
          transparent
          className="about-color-bends"
        />
        <WelcomeComponent/>
    </div>
  );
}

export default AboutContainer;