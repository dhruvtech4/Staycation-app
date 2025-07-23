import { useState, FC } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

const popularLocations = [
  "Hyderabad",
  "Bangalore",
  "Mumbai",
  "Chennai",
  "Delhi",
  "Kolkata",
  "Goa",
  "Pune",
];

const HotelSearch: FC = () => {
  const [location, setLocation] = useState<string>("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-3xl border border-blue-400 bg-white p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.5)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          {/* Location Combo Box */}
          <div className="flex flex-col">
            <Label className="mb-1 text-sm text-gray-700">Location</Label>
            <Input
              list="popular-locations"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search or select city"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-md focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
            />
            <datalist id="popular-locations">
              {popularLocations.map((city) => (
                <option key={city} value={city} />
              ))}
            </datalist>
          </div>

          {/* Check-in Date */}
          <div className="flex flex-col">
            <Label className="mb-1 text-sm text-gray-700">Check-in</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[140px] justify-start text-left text-sm shadow-md"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "MMM dd yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(d) => d < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col">
            <Label className="mb-1 text-sm text-gray-700">Check-out</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[140px] justify-start text-left text-sm shadow-md"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "MMM dd yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(d) => (checkIn ? d <= checkIn : false)}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Adults */}
          <div className="flex flex-col items-start">
            <Label className="mb-1 text-sm text-gray-700">Adults</Label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setAdults(Math.max(1, adults - 1))}
              >
                −
              </Button>
              <span className="w-6 text-center">{adults}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setAdults(adults + 1)}
              >
                +
              </Button>
            </div>
          </div>

          {/* Children */}
          <div className="flex flex-col items-start">
            <Label className="mb-1 text-sm text-gray-700">Children</Label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setChildren(Math.max(0, children - 1))}
              >
                −
              </Button>
              <span className="w-6 text-center">{children}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setChildren(children + 1)}
              >
                +
              </Button>
            </div>
          </div>

          {/* Search Button */}
          <div>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 text-sm rounded-lg shadow-md">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
