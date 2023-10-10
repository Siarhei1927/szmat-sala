import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Pa-belarusku',
          img: 'pa-belarusku.jpg',
          desc: "Samy prosty pacept",
          category: 'home',
          price: '45.99'
        },
        {
          id: 2,
          title: 'U rasole',
          img: 'urasole.jpg',
          desc: "zasolena u rasole",
          category: 'home',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Palyauniczae',
          img: 'palyauniczae.jpg',
          desc: "dlya sapraudnych muzykou",
          category: 'away',
          price: '59.99'
        },
        {
          id: 4,
          title: 'Pad czaraczku',
          img: 'czaraczka.jpg',
          desc: "idealna pasuje pad czarku garelki",
          category: 'guest',
          price: '34.99'
        },
      ]
    }
  }
  render() {
  return (
    <div className="wrapper">
      <Header />
      <Items items = { this.state.items }/>
      <Footer />
    </div>
  );
  }
  }

export default App;
