import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import styles from "@shared/styles/globals.css?url"
import * as React from "react"

interface RootComponentProps {
  children: React.ReactNode
}

interface RootWithContextProps {
  // TODO: Define your context props here
  // you can add several integration into the context router
  // will be visible to the router file
  //
  // example:
  // queryClient: QueryClient
  // etc.
}

export const Route = createRootRouteWithContext<RootWithContextProps>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles,
      },
    ],
  }),
  shellComponent: RootComponent,
})

function RootComponent({ children }: RootComponentProps) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
