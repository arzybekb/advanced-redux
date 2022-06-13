import { BASE_URL } from "../../utils/constants/general";
import { uiActions } from "./uiSlice";

export const sendCartData = (cart) => {
    return (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending data o cart !",
        })
      );
      fetch(`${BASE_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify(cart),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Sending cart data failed");
          }
          dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success !",
              message: "Sent cart data successfully !",
            })
          );
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error !",
              message: "Sending cart data failed !",
            })
          );
        });
    }
  }