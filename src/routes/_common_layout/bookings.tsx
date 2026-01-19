import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_common_layout/bookings")({
  component: Bookings,
});

function Bookings() {
  return <div className="p-2">Hello from Bookings!</div>;
}
