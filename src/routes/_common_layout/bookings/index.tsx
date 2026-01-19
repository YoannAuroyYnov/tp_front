import { createFileRoute } from "@tanstack/react-router";
import { Bookings } from "../../../modules/bookings";

export const Route = createFileRoute("/_common_layout/bookings/")({
  component: Bookings,
});
