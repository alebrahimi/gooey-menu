import Gooey from './Gooey';


function App() {
  return (
    <Gooey 
      size={400}
      color="#ddc5c5"
      btnSize={50}
      btnColor="#5e5e5e"
      distance={100}
      slice={50}
      startAngle={15}
      buttons={[
        {
          title: "",
          color: "red",
        },
        {
          title: "",
          color: "red",
        },
        {
          title: "",
          color: "red",
        },
        {
          title: "",
          color: "red",
        },
      ]}
    />
  );
}

export default App;
