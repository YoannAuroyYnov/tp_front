import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_common_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        {" | "}
        <Link to="/bookings" className="[&.active]:font-bold">
          Bookings
        </Link>
        {" | "}
        <Link to="/spaces" className="[&.active]:font-bold">
          Spaces
        </Link>
        {" | "}
        <Link to="/account" className="[&.active]:font-bold">
          Account
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
