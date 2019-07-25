import React, { Component } from 'react'
import './Header.css'
import coverImage from './cover.jpeg'

export default class LoadingExample extends Component {
  state = {
    show: false
  }

  onShow = ()=> {
    this.setState({ show: true })
  }

  onHide = ()=> {
    this.setState({ show: false })
  }

  render() {
    return (
      <header className="component-header">
        <div className="component-header-title">
          pdl2pdf ~ Panjab Digital Library to PDF Converter
        </div>
        <h2>
        download image galleries from <a href="http://panjabdigilib.org">punjabdigilib.org</a> onto a single PDF file
        </h2>
        <hr />
        <div className="col-md-10">
        <br /><br />
        <p>
          ਪੁੰਜਾਬ ਡਿਜਿਟਲ ਲਾਈਬ੍ਰੇਰੀ (Panjab Digital Library) ਇਕ ਅਮੋਲਕ ਖਜਾਨਾ ਹੈ ਜਿਸ ਦੇ ਰਾਹੀਂ ਪੁਰਾਤਨ ਜਾਂ ਨਵੀਨ ਗ੍ਰੰਥਾਂ, ਪੁਸਤਕਾਂ ਅਤੇ ਹੋਰ ਲੇਖਾਂ ਦੀ ਸੰਬਾਲ ਕੀਤੀ ਗਈ ਹੈ,
          ਅਤੇ <a href="http://panjabdigilib.org">punjabdigilib.org</a> ਵੈਬਸਾਈਟ ਰਾਹੀਂ ਕੋਈ ਵੀ ਦਰਸ਼ਨ ਕਰ ਸੱਕਦਾ। ਪਰ ਕੁੱਝ ਲੇਖ ਜੋ ਸਿਰਫ ਤਸਵੀਰਾਂ ਦੇ ਰੂਪ ਵਿਚ ਹਨ, ਓਹੋ ਲੇਖ ਸੌਖੇ ਤਰੀਕੇ ਨਾਲ ਦਾਊਨਲੋਡਾਂ ਨਹੀ ਕਰ ਸੱਕਦੇ।
          ਓਸ ਕਾਰਣ, ਇਸ ਵੈਬਸਾਈਟ ਵਿਚ ਲਿੰਕ ਪਾ ਕੇ, PDF ਦੇ ਰੂਪ ਵਿਚ ਦੋਾਨਲੋੳਦ ਕਰ ਲੋ ਜੀ।
        </p>
        <br />
        <p>
          Panjab Digital Library is an invaluable collection of old and new manuscripts that have been digitized and preserved.
          However, not all of the content is easily downloadable.
          This utility can be used to convert image galleries for manuscripts that are missing a PDF download link.
          Simply paste the link of a manuscript that you would like to download and a PDF will be generated.
        </p>
        </div>
        <div className="col-md-2">
          <img src={coverImage} alt="puratan SriDasamGranthSahibJee saroop pehila ang" width="200"/>
          <br /><br />
        </div>
        <div className="col-md-12">
        <hr />
        <p>
          <b>DISCLAIMER:</b> This website downloads and compiles image data that is freely available on www.panjabdigilib.org.
          The website does not store any data on its own servers.
        </p>
        <br />
        <p>
          <b>*** ਜਰੂਰੀ ਬੇਨਤੀ: ਕਈ ਦਾਊਨਲੋਡਾਂ ਨੂੰ ਖੱਤਮ ਹੋਨ ਲਈ ਕੁੱਝ ਮਿੰਟ ਲਗ ਸੱਕਦੇ ਹਨ।</b>
        </p>
        <p>
          <b>***Important: The program may take several minutes to complete for large files, please be patient!</b>
        </p>
        <p>
        (DO NOT close the browser if the loading bar appears to freeze on the last panna.
          You can right-click and select 'Inspect Element' and then 'Console' to view progress.)
        </p>
        </div>
      </header>
    )
  }
}
