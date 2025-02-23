import Feed from "./Components/Feed/index.tsx";
import Header from "./Components/Header/index.tsx";
import ProfileSide from "./Components/ProfileSide/index.tsx";
import ZoomControle from "./Components/ZoomControle/index.tsx";

function App() {
  return (
    <>
    <ZoomControle></ZoomControle>
      <Header></Header>
      <div>
        <ProfileSide></ProfileSide>
        <Feed></Feed>
      </div>
    </>
  );
}

export default App;
