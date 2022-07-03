import './App.css';
import Testimonio from './components/testimonio';
import './hojas-de-estilos/testimonio.css';

function App() {
  return (
    <div className="App">
      <h1 className="mt-5 text-center">Here is what our alumni say about freeCodeCamp:</h1>
      <Testimonio img={textos.shawn.imagen} name={textos.shawn.nombre} country={textos.shawn.pais} charge={textos.shawn.cargo} firma={textos.shawn.firma} description={textos.shawn.descripcion} />
      <Testimonio img={textos.sarah.imagen} name={textos.sarah.nombre} country={textos.sarah.pais} charge={textos.sarah.cargo} firma={textos.sarah.firma} description={textos.sarah.descripcion} />
      <Testimonio img={textos.emma.imagen} name={textos.emma.nombre} country={textos.emma.pais} charge={textos.emma.cargo} firma={textos.emma.firma} description={textos.emma.descripcion} />
    </div>
  );
}

const textos = {
  shawn : {
    imagen: require('./imagenes/testimonio-shawn.png'),
    nombre: 'Shawn Wang',
    pais: 'Singapore',
    cargo: 'Software Engineer',
    firma: 'Amazon',
    descripcion: "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
  },
  sarah : {
    imagen: require('./imagenes/testimonio-sarah.png'),
    nombre: 'Sarah Chima',
    pais: 'Nigeria',
    cargo: 'Software Engineer',
    firma: 'ChatDesk',
    descripcion:"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
  },
  emma : {
    imagen: require('./imagenes/testimonio-emma.png'),
    nombre: 'Emma Bostian',
    pais: 'Sweden',
    cargo: 'Software Engineer',
    firma: 'Spotify',
    descripcion: "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
  }
}

export default App;