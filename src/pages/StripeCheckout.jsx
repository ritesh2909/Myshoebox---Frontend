import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import  URL  from "../config/endpoint";

function StripeCheckout() {
  const [product, setProduct] = useState([
    {
      name: "Go FullStack with KnowledgeHut",
      price: 1000,
      productOwner: "KnowledgeHut",
      description:
        "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
      quantity: 1,
    },
  ]);

  const makePayment = async (e) => {
    e.preventDefault();
    const stripe = await loadStripe(
      "pk_test_51MG1EjSEcoDUzKMhB7XWBNrNFaRb8QMOLBB0SyNUsVWFQ6Yf0PYjPnHIuZXZbHFKXX4q6S7PEdTorA76KDfNt6zg00p60OfTl5"
    );

    const response = await axios.post(
      URL + "/api/payment/create-payment-intent",
      { products: product }
    );

    let session = response.data;

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      {product.length > 0 &&
        product.map((prod) => (
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/12428359/pexels-photo-12428359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Text>{prod.description}</Card.Text>
              <Button variant="primary" onClick={makePayment}>
                Buy Now for {prod.price}
              </Button>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}

export default StripeCheckout;
