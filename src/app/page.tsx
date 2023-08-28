import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Manage Your IPTV Playlists {' '}
              <strong className="font-extrabold bg-gradient-to-r from-white to-blue-700 bg-clip-text text-transparent sm:block">
              with Ease
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              our application offers you an intuitive way to manage your playlists
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="block w-full rounded bg-white border border-blue-700 shadow-lg px-12 py-3 text-sm font-medium text-black hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-none sm:w-auto" href="/playlist-manager">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
