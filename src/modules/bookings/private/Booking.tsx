import { Link } from "@tanstack/react-router";
import { format } from "date-fns";

export const Booking = ({
  booking,
  spaceName,
}: {
  booking: any;
  spaceName?: string;
}) => {
  return (
    <Link to={`/bookings/${booking.id}`}>
      {`${booking.name} - from ${format(
        new Date(booking.start_datetime),
        "PPpp",
      )} to ${format(new Date(booking.end_datetime), "PPpp")} ${
        spaceName && `in ${spaceName}`
      }`}
    </Link>
  );
};
