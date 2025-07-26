import './index.css'
function App() {
  const handleGmailConnect = () => {
    window.location.href =
      "https://gmail-labeler-backend.onrender.com/rest/oauth2-credential/auth?credentialName=Gmail"
  }

  const handleLabeling = async () => {
    try {
      const res = await fetch(
        "https://gmail-labeler-backend.onrender.com/webhook/gmail-label",
        { method: "POST" }
      )
      const data = await res.json()
      alert("✅ Labeling complete!")
    } catch (err) {
      alert("❌ Error occurred while labeling")
    }
  }

  return (
    <div
      className="res w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1675271591211-126ad94e495d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fC5haXxlbnwwfHwwfHx8MA%3D%3D')",
           height:"100vh",width:"100vw",backgroundSize:"cover"
      }}
    >
      <div style={{padding:"7%"}} className="bg-white/80 backdrop-blur-md px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-16 rounded-2xl shadow-2xl w-[90%] max-w-lg text-center">
        <h1 className="teztedit text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
          Gmail Labeler
        </h1>
        <p className="paraEdit text-gray-700 mb-6 font-medium text-sm sm:text-base md:text-lg leading-relaxed">
          Organize your Gmail inbox into categories like Finance, Jobs,
          Priority, and more — all with a single click.
        </p>
        <div className="res1">
          <button
            onClick={handleGmailConnect}
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            🔐 Connect Gmail
          </button>
          <button
            onClick={handleLabeling}
            className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            🏷️ Start Labeling
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
