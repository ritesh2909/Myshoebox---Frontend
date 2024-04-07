import { useContext, useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavbarV2 from "../components/NavbarV2";
import WishListItems from "../components/wishList/WishListItems";
import { Context } from "../context/Context";
import axios from "axios";
import { URL } from "../config/endpoint";

function Wishlist({ history }) {
  const { token, isFetching, error, dispatch } = useContext(Context);

  const [products, setProducts] = useState([]);

  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const getWishList = async () => {
      if (!token) {
        console.log("login")
      }

      try {
        const url = URL + "/api/wishlist/getwishlist";
        const wishListProds = await axios.get(
          url,
          { headers: headers }
        );
        // console.log(wishListProds)
        setProducts(wishListProds.data.products);

      } catch (error) {
        console.log(error);
      }
    };
    getWishList();
  }, []);

  return (
    <div>
      <NavbarV2 />
      <WishListItems props={products} />
      <Footer />
    </div>
  );
}

export default Wishlist;
