export const metadata = {
  title: 'iNovuus Content Studio',
  description: 'Content management for iNovuus Technologies',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
