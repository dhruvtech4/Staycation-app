// HotelSearch.tsx

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

// 1. BookingDialog defined at the top
function BookingDialog({
  isOpen,
  onClose,
  hotel,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  onBook,
  guests,
}: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
        <h3 className="text-lg font-bold">Confirm Your Booking</h3>
        <p>{hotel.name}</p>
        <p>{hotel.location}</p>
        <p>{hotel.description}</p>
        <p>
          Stay: {checkIn ? format(checkIn, "MMM dd") : "?"} -{" "}
          {checkOut ? format(checkOut, "MMM dd yyyy") : "?"}
        </p>
        <p>Guests: {guests}</p>

        <div className="flex justify-between gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onBook}>Confirm</Button>
        </div>
      </div>
    </div>
  );
}

// 2. HotelSearch defined after
export default function HotelSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState<any>(null);

  const dummyHotels = [
    {
      id: 1,
      name: "Palm Resort",
      location: "Goa",
      price: 1500,
      description: "Beachside resort with pool",
      image: "",
    },
    {
      id: 2,
      name: "Hill View Hotel",
      location: "Ooty",
      price: 1200,
      description: "Mountain view stay",
      image: "",
    },
  ];

  const filteredHotels = dummyHotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* ... your search form code ... */}
      {/* ... hotel list code ... */}

      {filteredHotels.map((hotel) => (
        <div key={hotel.id} className="border p-4 rounded-md shadow-sm flex justify-between items-center">
          <div>
            <h4 className="text-md font-bold">{hotel.name}</h4>
            <p className="text-sm text-gray-500">{hotel.location}</p>
            <p className="text-sm mt-1">INR {hotel.price} / night</p>
          </div>
          <Button onClick={() => setSelectedHotel(hotel)}>Book Now</Button>
        </div>
      ))}

      {/* Booking Dialog */}
      {selectedHotel && (
        <BookingDialog
          isOpen={!!selectedHotel}
          onClose={() => setSelectedHotel(null)}
          hotel={selectedHotel}
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          onBook={() => {
            alert("Booking confirmed!");
            setSelectedHotel(null);
          }}
          guests={adults + children}
        />
      )}
    </div>
  );
}
