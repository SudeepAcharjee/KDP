import React from "react";

const BookingPage: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <iframe
        className="w-full h-[80vh] border-none"
        src="https://booking.appointy.com/en-US/sudeepdyh/bookings/calendar?st=689640"
      ></iframe>
    </div>
  );
};

export default BookingPage;