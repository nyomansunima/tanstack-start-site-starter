interface MetaTagsInput {
  title: string
  description: string
  image?: string
  keyword?: string
}

export function generateMetaTags(
  meta: MetaTagsInput,
):
  | (
      | React.DetailedHTMLProps<
          React.MetaHTMLAttributes<HTMLMetaElement>,
          HTMLMetaElement
        >
      | undefined
    )[]
  | undefined {
  return [
    {
      title: meta.title,
    },
    {
      name: "description",
      content: meta.description,
    },
  ]
}
