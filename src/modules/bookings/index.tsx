import { useBookings } from "../../infra/queries/bookings";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";

const CONSTANT_BOOKINGS = [
  {
    id: 1,
    name: "Booking 1",
    userId: 123,
    spaceId: 456,
    start_datetime: "2024-07-01T10:00:00Z",
    end_datetime: "2024-07-01T12:00:00Z",
  },
  {
    id: 2,
    name: "Booking 2",
    userId: 124,
    spaceId: 457,
    start_datetime: "2024-07-02T14:00:00Z",
    end_datetime: "2024-07-02T16:00:00Z",
  },
  {
    id: 3,
    name: "Booking 3",
    userId: 125,
    spaceId: 458,
    start_datetime: "2024-07-03T09:00:00Z",
    end_datetime: "2024-07-03T11:00:00Z",
  },
];

const CONSTANT_SPACES = [
  {
    id: 456,
    name: "Space A",
    location: "Location 1",
    capacity: 10,
  },
  {
    id: 457,
    name: "Space B",
    location: "Location 2",
    capacity: 20,
  },
  {
    id: 458,
    name: "Space C",
    location: "Location 3",
    capacity: 15,
  },
];

export const Bookings = () => {
  const { data: bookings = [], isFetching } = useBookings();

  if (isFetching) {
    return <div>Loading bookings...</div>;
  }

  return (
    <>
      <div>Bookings list:</div>
      <ul>
        {(bookings.length > 0 &&
          bookings.map((booking: any) => (
            <li key={booking.id}>
              {booking.id} - {booking.name}
            </li>
          ))) ||
          CONSTANT_BOOKINGS.map((booking) => (
            <li key={booking.id}>
              <Link to={`/bookings/${booking.id}`}>
                {`${booking.name} - from ${format(
                  new Date(booking.start_datetime),
                  "PPpp",
                )} to ${format(new Date(booking.end_datetime), "PPpp")} ${
                  CONSTANT_SPACES.find((space) => space.id === booking.spaceId)
                    ?.name
                }`}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
