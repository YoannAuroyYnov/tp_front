import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_common_layout/account")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="p-2">Hello from Account!</div>;
}
