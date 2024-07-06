import "./App.css";

function MoviePoster(props) {
  return (
    <>
      <div className="wrapper">
        <div className="left">
          <div className="leftimagesection">
            <img src={props.information.images.img1} alt="kalkiposter" id="kaliPoster" />
            <div className="infosection">
              <h2>{props.information.name}</h2>
              <p className="releaseYear">2017 , Anuj </p>
              <p>
                <span> {props.information.duration} </span>{props.information.type}
              </p>
            </div>
          </div>
          <div className="summary">
            <p>
              {props.information.summary}
            </p>
          </div>
          <div className="shareIcon"></div>
        </div>

        <div className="right">
          <img src={props.information.images.img2} alt="Prabhas" id="Prabhas" />
        </div>
      </div>
    </>
  );
}
export default MoviePoster;
