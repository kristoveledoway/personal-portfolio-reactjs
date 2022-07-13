import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Project from "./components/Project"
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="bg-[#080808] w-screen min-h-screen">
      <Header />
      <Banner />
      <Project />
      <Testimonial />
      <Contacts />
    </div>
  );
}

export default App;
