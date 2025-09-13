import { generateMetaTags } from "@shared/libs/shared-metadata"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generateMetaTags({
      title: "YOUR TITLE | SITE NAME",
      description: "YOUR DESCRIPTION",
    }),
  }),
  component: PageComponent,
})

function PageComponent() {
  return <div className="text-center"></div>
}
