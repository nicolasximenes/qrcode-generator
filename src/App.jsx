import QRCode from 'qrcode'
import { useState } from 'react'

function App() {

  const [url, setUrl] = useState('')
  const [qrcode, setQRcode] = useState('')

  const generateQRcode = (e) => {
    e.preventDefault()

    QRCode.toDataURL(
      url,
      {
        width: 300,
        margin: 1,
      },
      (err, res) => {
        if (err) return console.error(err)
        setQRcode(res)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 max-w-md w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white text-center mb-2 drop-shadow-md">Gerador de código QR</h1>
        <p className="text-white/80 text-center mb-8 drop-shadow-sm">Este aplicativo irá gerar um código QR com o link que você inserir.</p>

        <form className="w-full flex gap-3 justify-center mb-8" onSubmit={generateQRcode}>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all"
            placeholder="Insira seu link aqui"
            required
          />
          <button type="submit" className="px-6 py-2 bg-pink-500/80 hover:bg-pink-600/90 text-white font-medium rounded-lg border border-pink-400/50 shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95">Gerar</button>
        </form>

        {!qrcode ? (
          <div className="w-[300px] h-[300px] flex items-center justify-center bg-black/10 border-2 border-dashed border-white/40 rounded-xl backdrop-blur-sm">
            <p className="text-white/60 font-medium">Seu código QR aparece aqui.</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 w-[300px]">
            <div className="p-2 bg-white rounded-xl shadow-lg">
              <img src={qrcode} alt="qrcode-img" className="rounded-lg w-full h-auto" />
            </div>
            <a href={qrcode} download="qrcode" className="w-full py-3 bg-indigo-600/80 hover:bg-indigo-700/90 text-white font-medium rounded-lg border border-indigo-400/50 shadow-lg backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-95 text-center flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Baixar</span>
            </a>
          </div>
        )}
      </div>

    </div>
  )
}

export default App
