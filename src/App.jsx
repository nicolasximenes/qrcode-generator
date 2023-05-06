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
      
      <h1 className="app-name">QR Code Generator</h1>
      <p className="app-desc">This app will generate link you paste in</p>
      
      <form className="form" onSubmit={generateQRcode}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input-field"
          placeholder="Insert your link here"
        />
        <button type="submit" className="btn-gen">Generate</button>
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
          <p>Your QR Code appears here.</p>
        </div>
      ) : (
        <div className="qrcode-container">
          <img src={qrcode} alt="qrcode-img" />
          <a href={qrcode} download="qrcode" className="btn-download">
            <span>Download</span>
          </a>
        </div>
      )}

    </div>
  )
}

export default App
