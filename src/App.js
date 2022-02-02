import Gooey from './Gooey';

import { faUser, faBuilding, faBook, faCalendarAlt, faFrog, faFish, faCat, faCrow, faHorse, faHippo, faSpider, faOtter, faDragon } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <Gooey 
      size={400}
      //color="#ddc5c5"
      btnSize={50}
      btnColor="#5e5e5e"
      distance={100}
      slice={50}
      startAngle={15}
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
      ]}
    />
  );
}

export default App;
