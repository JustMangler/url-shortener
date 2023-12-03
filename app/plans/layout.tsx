export default function PlansLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-main">{children}</section>;
}
