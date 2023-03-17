import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {


  const [modalVisible, setModalVisible] = useState(false);

  const hideModalHandler = () => {
    setModalVisible(false);
  };
  const showModalHandler = () => {
    setModalVisible(true);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <PostList isPosting={modalVisible} onStopPosting={hideModalHandler} />
    </>

    // <div className="App">
    /* <Post author={"Meghani"} title={"Rs Thad"} />
      <Post author={"Mira"} title={"Khani"} /> */
    // </div>
  );
}

export default App;
