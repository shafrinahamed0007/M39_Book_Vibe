import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../Components/ListedBooks/ReadList";
import WishList from "../../Components/ListedBooks/WishList";

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  // console.log("Stored Books", storedBooks);
  // console.log("Wishlist Books", wishList);
  return (
    <div className="container mx-auto my-10">
      
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadList />
        </TabPanel>
        <TabPanel>
          <WishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
