import { createRouter as createTanstackRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"

export const createRouter = () => {
  // TODO: Define your all integrations code
  // with the router
  //
  // Define the router including with
  // context, data and etc.
  const router = createTanstackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
