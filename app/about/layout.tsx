export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="pl-20 text-blue-700 mt-4">This sentence is coming from folder name: about/layout.tsx</p>
      <main>{children}</main>
    </>
  );
}
