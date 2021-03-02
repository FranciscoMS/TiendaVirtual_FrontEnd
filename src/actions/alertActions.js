import { SHOW_ALERT, HIDE_ALERT } from "../types";

export function showAlertAction(message, category) {
  return (dispatch) => {
    dispatch(showAlert({
      message,
      category,
    }));

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  }
}

const showAlert = (alert) => ({
  type: SHOW_ALERT,
  payload: alert
});

const hideAlert = () => ({
  type: HIDE_ALERT
});