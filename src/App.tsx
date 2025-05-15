import { useEffect } from 'react';
import './App.css'; // Ou o seu arquivo de estilos principal

// Declaração para o TypeScript reconhecer window.particlesJS
declare global {
  interface Window {
    particlesJS: any;
  }
}

function App() {
  useEffect(() => {
    // Verifica se a biblioteca particlesJS foi carregada
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#61DAFB"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.3,
            "random": false
          },
          "size": {
            "value": 3,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#1C2536",
            "opacity": 0.2,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_opacity": 0.5
            },
            "push": {
              "particles_nb": 4
            }
          }
        },
        "retina_detect": true
      });
    } else {
      console.error('particles.js não foi carregado.');
    }
  }, []); // Array de dependências vazio para executar apenas uma vez após a montagem

  return (
    <>
      {/* Este é o container para o particles.js */}
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 0 }}></div>

      {/* Conteúdo da sua página sobreposto ao particles.js */}
      {/* Adapte este conteúdo ao que você deseja exibir */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '20vh' }}>
        <h1>Seu Conteúdo Aqui</h1>
        <p>Este é um exemplo com particles.js no fundo.</p>
        {/* Você pode colocar o restante do seu JSX aqui */}
      </div>
    </>
  );
}

export default App;
