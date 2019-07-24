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
          pdl2pdf ~ powered by <a href="http://panjabdigilib.org">Panjab Digital Library</a>
        </div>
        <h2>
        convert image galleries on panjabdigilib.org to a single PDF file
        ~  panjabdigilib.org ਰਾਹੀਂ ਪੁਸਤਕਾ ਨੂੰ PDF file ਦੇ ਰੂਪ ਵਿਚ ਬਣੌਨ ਵਾਲੀ website
        </h2>
        <p>
          Panjab Digital Library is an invaluable collection of old and new manuscripts that have been digitized and preserved.
          However, not all of the content is easily downloadable. This utility can be used to convert imaage galleries that are missing a download link.
          Simply paste the link of a manuscript or scripture that you would like to download and a PDF will be generated.
        </p>
        <p>
          <b>The program may take several minutes to complete for large files, please be patient!</b>
        </p>
      </header>
    )
  }
}
