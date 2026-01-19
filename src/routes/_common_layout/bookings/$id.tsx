import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/_common_layout/bookings/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = useParams({ from: "/_common_layout/bookings/$id" });

  return <div>Show details of booking {id}:</div>;
}
