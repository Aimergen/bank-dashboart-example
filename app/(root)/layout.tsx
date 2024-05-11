export default function DashboarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>SIDEBAR{children}</main>;
}
