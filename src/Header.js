import React, { Component } from 'react'
import './Header.css'

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
        download image galleries on <a href="http://panjabdigilib.org">punjabdigilib.org</a> onto a single PDF file
        </h2>
        <p>
          ਪੁੰਜਾਬ ਡਿਜਿਟਲ ਲਾਈਬ੍ਰੇਰੀ (Panjab Digital Library) ਇਕ ਅਮੋਲਕ ਖਜਾਨਾ ਹੈ ਜਿਸ ਦੇ ਰਾਹੀਂ ਪੁਰਾਤਨ ਜਾਂ ਨਵੀਨ ਗ੍ਰੰਥਾਂ, ਪੁਸਤਕਾਂ ਅਤੇ ਹੋਰ ਲੇਖਾਂ ਦੀ ਸੰਬਾਲ ਕੀਤੀ ਗਈ ਹੈ,
          ਅਤੇ <a href="http://panjabdigilib.org">punjabdigilib.org</a> ਵੈਬਸਾਈਟ ਰਾਹੀਂ ਕੋਈ ਵੀ ਦਰਸ਼ਨ ਕਰ ਸੱਕਦਾ। ਪਰ ਕੁੱਝ ਲੇਖ ਜੋ ਸਿਰਫ ਤਸਵੀਰਾਂ ਦੇ ਰੂਪ ਵਿਚ ਹਨ, ਓਹੋ ਲੇਖ ਸੌਖੇ ਤਰੀਕੇ ਨਾਲ ਦਾਊਨਲੋਡਾਂ ਨਹੀ ਕਰ ਸੱਕਦੇ।
          ਓਸ ਕਾਰਣ, ਇਸ ਵੈਬਸਾਈਟ ਵਿਚ ਲਿੰਕ ਪਾ ਕੇ, PDF ਦੇ ਰੂਪ ਵਿਚ ਦੋਾਨਲੋੳਦ ਕਰ ਲੋ ਜੀ।
        </p>
        <p>
          Panjab Digital Library is an invaluable collection of old and new manuscripts that have been digitized and preserved.
          However, not all of the content is easily downloadable. This utility can be used to convert imaage galleries that are missing a download link.
          Simply paste the link of a manuscript or scripture that you would like to download and a PDF will be generated.
        </p>
        <p>
          <b>*** ਜਰੂਰੀ ਬੇਨਤੀ: ਕੱਈ ਦਾਊਨਲੋਡਾਂ ਨੂੰ ਖੱਤਮ ਹੋਨ ਲਈ ਕੁੱਝ ਮਿੰਟ ਲਗ ਸੱਕਦੇ ਹਨ।</b>
        </p>
        <p>
          <b>***Important: The program may take several minutes to complete for large files, please be patient!</b>
        </p>
      </header>
    )
  }
}
