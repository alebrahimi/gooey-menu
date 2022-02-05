import Gooey from './Gooey';

import { faFrog, faFish, faCat, faCrow, faHorse, faHippo, faSpider, faOtter, faDragon } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <Gooey 
      size={600}
      //color="#e27258"
      btnSize={70}
      btnColor="#8db69d"
      distance={115}
      slice={45}
      startAngle={0}
      buttons={[
        {
          title: "",
          color: "red",
          icon: faFrog,
        },
        {
          title: "",
          color: "red",
          icon: faFish,
        },
        {
          title: "",
          color: "red",
          icon: faCat,
        },
        {
          title: "",
          color: "red",
          icon: faHippo,
        },
        {
          title: "",
          color: "red",
          icon: faHorse,
        },
        {
          title: "",
          color: "red",
          icon: faCrow,
        },
        {
          title: "",
          color: "red",
          icon: faOtter,
        },
        {
          title: "",
          color: "red",
          icon: faSpider,
        },
      ]}
    />
  );
}

export default App;
