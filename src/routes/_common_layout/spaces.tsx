import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_common_layout/spaces")({
  component: Spaces,
});

function Spaces() {
  return <div className="p-2">Hello from Spaces!</div>;
}
