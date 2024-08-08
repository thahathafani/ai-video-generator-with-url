function App() {

  return (
    <>

    <main className=" mx-auto flex justify-center h-screen">
      <div className="p-8">
        <h1 className="text-4xl font-bold uppercase mb-8">
            <span className="text-6xl">
              AI Generated video's from url's.
            </span>
        </h1>
        <p className="text-xl">
          Effortlessly create and compile videos from your favorite URLs. Transform links into dynamic video content in just a few clicks!
        </p>
        <form action="">
          <input className="w-full p-4 bg-transparent border-2 rounded-full mt-4"
            type="url" placeholder="https://..."/>
          <div>
            <button className="p-2 w-full bg-white text-lg text-black justify-center rounded-full mt-4"
                type="submit">
                Create Video
            </button>
          </div>
        </form>
      </div>
      <div className="p-8">
        <div className="bg-gray-200 w-[260px] h-[440px] rounded-2xl p-8">
            helloo
        </div>
      </div>
    </main>
      
    </>
  )
}

export default App
