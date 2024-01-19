"use client"
import NewHotelForm from "../../components/NewHotelForm";
function NewHotelPage() {
  function addHotelHandler(hotelData: any) {
    fetch("https://hotel-booking-a5bd9-default-rtdb.firebaseio.com/hotels.json", {
      method: "POST",
      body: JSON.stringify(hotelData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {});
  }

  return <NewHotelForm onAddHotel={addHotelHandler} />;
}

export default NewHotelPage;
