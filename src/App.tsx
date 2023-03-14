import "./css/app.css";
import QRImage from "./images/image-qr-code.png";
const App = () => {
  return (
    <section>
      <div className="container">
        <div className="img-container">
          <img src={QRImage} className="qr-image" alt="QR Code" />
          <div className="text-container">
            <h3 className="title-text">
              Improve your front-end skills by building projects
            </h3>
            <p className="paragraph-text">
              Scan the QR Code to visit Frontend Mentor and take your coding
              skills to the next level!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
