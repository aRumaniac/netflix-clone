import { QuerySnapshot } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from '../counters/userSlice';
import {loadStripe } from "@stripe/stripe-js"

function PlanScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection("products")
      .where("active", true)
      .get()
      .then((QuerySnapshot) => {
        const products = {};
        QuerySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((doc) => {
            products[productDoc.id].prices = {
              priceId: priceSnap.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db.collection("customer")
    .doc(user.uid).collection("checkout_sessions")
    .add({
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin
    });

    docRef.onSnapshot(async(snap) => {
      const {error, sessionId} = snap.data();

      if(error){
        alert(`An error occured: ${error.message}`)
      }

      if(sessionId){
        const stripe = await loadStripe(PublicKey);
        stripe.redirectToCheckout({ sessionId })
      }
    })
  }

  return (
    <div className="planScreen">
      {object.entries(products).map(([productId, productData]) => {
        return (
          <div className="planScreen__plan">
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
