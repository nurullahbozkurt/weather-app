import { useState } from "react";
const position = () => {
  const [userlocation, setUserlocation] = useState();
  console.log(userlocation);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("tarayıcınız desteklemiyor");
  }

  // başarılı ise bu fonksiyon çalışacak
  function showPosition(position) {
    setUserlocation(position.coords);
  }

  // bir hata olursa bu fonksiyon çalışacak
  function showError(error) {
    console.log(error);
  }
};
export default position;
