import iziToast from "izitoast";

// export function ShowError() {
//   iziToast.error({
//     message: "Please enter a search query.",
//     position: "topRight",
//   });
// }

export function ShowErrorMessage() {
  iziToast.error({
    backgroundColor: "#ff0001",
    position: "topCenter",
    maxWidth: 400,
    timeout: 3000,
    message:
      "Sorry, there are no contacts matching your search query. Please try again!",
  });
}

// export function ShowErrorEnd() {
//   iziToast.error({
//     backgroundColor: "#dc143c",
//     message: "We're sorry, but you've reached the end of search results",
//     position: "bottomCenter",
//   });
// }
