import Navbar from "./Navbar";
import FirstSection from "./FirstSection";
import Mission from "./Mission";
import Leadership from "./Leadership";
import Investors from "./Investors";
import Footer from "./Footer";

import { AppContainer } from "./styles/App.style";
function App() {
  return (
    <AppContainer>
      <Navbar />
      <FirstSection />
      <Mission />
      <Leadership />
      <Investors />
      <Footer />
    </AppContainer>
  );
}

export default App;
