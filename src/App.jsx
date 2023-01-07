import CountCardsSection from "./components/CountCards";
import EmptyCards from "./components/EmptyCards";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <CountCardsSection />
      <EmptyCards />
      <Footer />
    </Layout>
  );
};

export default App;