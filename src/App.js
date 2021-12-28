import "./App.css";
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="titlered">Ajroudi Khaoula</h1>
      <div className="image">
        <img
          className="imagepublic"
          src="/imageInPublic.jpg"
          alt="imagepublic"
        ></img>
        <img className="imagesrc" src={imageInSrc} alt="imageInSrc" />
      </div>
      <div className="vidéo">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SFFZ0hpIk5Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
