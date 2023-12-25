export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>
          About Page{" "}
          <span>
            <p className="mt-2 text-pink-500">
              This sentence is coming from folder name: <span className="bg-black text-white rounded-lg lg:p-2 sm:p-2">about/page.tsx</span>
            </p>
          </span>
        </h1>
      </main>
    </>
  );
}
