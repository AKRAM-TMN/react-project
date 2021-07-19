import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const video = 
  <div className="d-flex">
            <div style={{ height: 94, width: 160, marginRight: 8 }}>
              <img
                src="https://i.ytimg.com/vi/JWay7CDEyAI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuHBTB0_3Pb5sEmoHHjWMWirz0BA"
                alt="nordo"
                width="100%"
                height="90%"
              />
            </div>
            <div>
              <h3 style={{ fontSize: 14 }}>ABBA Gimme! Gimme! Gimme! ( A Man After Midnight )</h3>
               <p>8.2M views 9 years ago</p>
            </div>
          </div>
          const list = [video,video,video]
          list.push(video)
  return (
    <div className="container-fluid" style={{ border: "4px solid" }}>
      <div className="row" style={{ border: "4px solid blue", height: "100%" }}>
        <div
          className="col-8"
          style={{ border: "4px solid red", height: "100%" }}
        >
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/wvw8DEwZEtw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div>
            <p>ABBA - Gimme! Gimme! Gimme! (Unofficial Kygo Remix)</p>
            <p>12,562 views9 Jul 2021</p>
          </div>
        </div>
        <div
          className="col-4"
          style={{ border: "4px solid red", height: "100%" }}
        >
          <div className="d-flex justify-content-between">
            <span>up next</span>
            <span>AUTOPLAY</span>
          </div>
         {list.map(video => video)}
        </div>
      </div>
    </div>
  );
}

export default App;
