import { useState } from "react"; 
import NewsContent from "./Components/NewsContent";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const App = () => {

  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsContent category={category} />
      <Footer setCategory={setCategory} />
    </div>
  );
};

export default App;
