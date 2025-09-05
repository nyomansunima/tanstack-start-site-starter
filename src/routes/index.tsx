import { createFileRoute } from "@tanstack/react-router"

function App() {
  return <div className="text-center"></div>
}

export const Route = createFileRoute("/")({
  component: App,
})
