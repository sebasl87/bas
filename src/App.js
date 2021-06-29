import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import wapp from "./assets/img/wapp.png";

function App() {
  return (
    <>
      <Header className="fixed" />
      <div
        style={{
          position: "fixed",
          width: "100%",
          display: "flex",
          height: "70%",
        }}
      >
        <img
          src={wapp}
          alt=""
          style={{
            width: "7%",
            maxWidth: "87px",
            margin: "auto",
            marginRight: "10%",
            marginBottom: "5%",
            cursor: "pointer",
          }}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=+5491138781970",
              "_blank"
            )
          }
        />
      </div>
      <Body />
      <Footer />
    </>
  );
}

export default App;
