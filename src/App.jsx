import QRCode from 'qrcode'
import { useState } from 'react'
import './App.css'

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
    <div className="App">
      
      <h1 className="app-name">Gerador de código QR</h1>
      <p className="app-desc">Este aplicativo irá gerar um código QR com o link que você inserir.</p>
      
      <form className="form" onSubmit={generateQRcode}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input-field"
          placeholder="Insira seu link aqui"
        />
        <button type="submit" className="btn-gen">Gerar</button>
      </form>

      {/* {qrcode && (
        <div className="qrcode-container">
          <img src={qrcode} alt="qrcode-img" />
          <a
            href={qrcode}
            download="qrcode"
            className="btn-download"
          >
            <span>Download</span>
          </a>
        </div>
      )} */}
      
      {!qrcode ? (
        <div className="qrcode-container empty">
          <p>Seu código QR aparece aqui.</p>
        </div>
      ) : (
        <div className="qrcode-container">
          <img src={qrcode} alt="qrcode-img" />
          <a href={qrcode} download="qrcode" className="btn-download">
            <span>Baixar</span>
          </a>
        </div>
      )}

    </div>
  )
}

export default App
