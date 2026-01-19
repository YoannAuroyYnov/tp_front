import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_common_layout/spaces/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_common_layout/spaces/$id"!</div>;
}
