import React , { useState } from 'react'; 
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import ItemsList from './components/ItemsList';
import { items } from './data';

function App() {
  const [itemsData, setItemsData] = useState(items);
  // console.log(itemsData);

  //get all cat uniqe
  const allCategory = ['الكل', ...new Set(items.map((i) => i.category))]
  // console.log(allCategory);

  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  }

    //filter by search form
    const filterbySearch = (word) => {
      if (word !== "") {
        const newArr = items.filter((item) => item.title === word);
        setItemsData(newArr);
      }
    }

  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch} />
      <Container>
      <Header />
      <Category allCategory={allCategory} filterbyCategory={filterbyCategory} />
      <ItemsList itemsData={itemsData} />
      </Container>
     
    </div>
  );
}
export default App;
