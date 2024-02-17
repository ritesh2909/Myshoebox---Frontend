const URL = "http://localhost:5000"
// const URL = "https://busy-red-termite-garb.cyclic.app/"

const appRoutes = {
  Register : "/register",
  Login: "/login",
  SignIn: "/signin",
  SingleProduct: "/product-info/:id",
  Home: "/",
  Wishlist: "/wishlist",
  Bag: "/bag",
  ProfileEdit: "/profile-edit",
  Failure: "/error",
  GetHelp: "/get-help",
  ProductsList: "/products",
  Checkout: "/checkout",
  Cart: "/cart",
  StripeSuccess: "/success",
  StripeCancel: "/cancel",
  StripeCheckout: "/stripe"
}


export {appRoutes,URL};