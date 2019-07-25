/*jshint loopfunc:true */
import React from 'react';
import LoadingBar from 'react-top-loading-bar'
import url from 'url'
import http from 'http'
import cheerio from 'cheerio'
import * as jsPDF from 'jspdf'
import Jimp from 'jimp/es';
import Header from './Header'
import Body from './Body'
import './App.css';


export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      userMessage: "",
      loadingBarProgress: 0
    };
  }

  add = value => {
    this.setState({
      loadingBarProgress: this.state.loadingBarProgress + value
    })
  }

  updateValue = value => {
    this.setState({
      loadingBarProgress: value
    })
  }


  complete = () => {
    this.setState({ loadingBarProgress: 100 })
  }

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 })
  }

  handleInputChange = event => {
    let self = this;
    this.add(1);
    const inputUrl = url.parse(event.target.value, true)
    const hostUrl = 'panjabdigilib.org';
    const inputHost = inputUrl.host;
    const id = inputUrl.query['ID'];
    if (inputHost !== hostUrl || id == null) {
      this.setState({
        userMessage: `Please enter a valid URL from www.panjabdigilib.org`
      })
    } else {
      const metaUrl = `http://cors-sikhutils.herokuapp.com/http://${hostUrl}/webuser/searches/displayPage.jsp?ID=${id}&page=1&CategoryID=1`;
      var numPages = null;
      var title = 'untitled';
      var pages = 1;
      var pagesLeft = 0;
      var buffer = [];
      http.get(metaUrl, (res) => {
        const {
          statusCode
        } = res;
        let error;
        if (statusCode !== 200) {
          error = new Error(`request failed, status code: ${statusCode}`);
        }
        if (error) {
          console.error(error.message);
          // Consume response data to free up memory
          res.resume();
          return;
        }
        let rawData = '';
        res.on('data', (chunk) => {
          rawData += chunk;
        });
        res.on('end', () => {
          try {
            var $ = cheerio.load(rawData);
            title = $('a[title*="on Panjab Digital Library"]').text();
            numPages = $('td').filter(function() {
              return $(this).text().trim() === 'Pages';
            }).next().text();
            pages = pagesLeft = parseInt(numPages);
            for (let i = 1; i <= pages; i++) {
              const imageUrl = `http://cors-sikhutils.herokuapp.com/http://panjabdigilib.org/images?ID=${id}&page=${i}&pagetype=null`;
              Jimp.read(imageUrl)
                .then(image => {
                  // imagePromises.push(image.getBase64Async(Jimp.MIME_PNG));
                  image.getBase64(Jimp.MIME_PNG, function(err, data) {
                    if (err != null) {
                      console.log('error downloading image');
                    } else {
                      console.log(`Processing images... ${pagesLeft}/${pages} ਪਨੇ left.`)
                      buffer[i] = data;
                      pagesLeft -= 1;
                      self.setState({
                        userMessage: `Processing images... ${pagesLeft}/${pages} ਪਨੇ left. This may take a while.`,
                        loadingBarProgress: (((1 - (pagesLeft/pages))*100)-1)
                      })
                      if (pagesLeft === 0) {
                        console.log("Finished processing. Generating PDF...");
                        // self.setState({
                        //   userMessage: `Finished processing. Generating PDF...`
                        // });
                        var pdf = new jsPDF();
                        for (let i = 1; i <= pages; i++) {
                          // self.setState({
                          //   userMessage: `Generating PDF... ${i}/${pages} ਪਨੇ completed. This may take a while.`,
                          //   loadingBarProgress: (((i/pages))*100-1)
                          // })
                          console.log(`Generating PDF... ${i}/${pages} ਪਨੇ completed`);
                          const imgProps = pdf.getImageProperties(buffer[1]);
                          const pdfWidth = pdf.internal.pageSize.getWidth();
                          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                          pdf.addImage(buffer[i], 'PNG', 0, 0, pdfWidth, pdfHeight);
                          if (i !== pages) {
                            pdf.addPage();
                          }
                        }
                        console.log('Downloading PDF...')
                        self.setState({
                          userMessage: `Downloading PDF...`
                        });
                        pdf.save(`${id}-${title}.pdf`);
                        self.setState({
                          userMessage: `Download complete. `
                        });
                        self.complete();
                      }
                    }
                  });
                })
                .catch(err => {
                  console.log("error fetching image")
                });
            }
          } catch (e) {
            console.error(`error parsing request: ${e.message}`);
          }
        });
      }).on('error', (e) => {
        console.error(`network request error: ${e.message}`);
      });
      this.setState({
        userMessage: `Loading webpage...`
      })
    };
  }

  render() {
    return (
      <div>
      <LoadingBar
        progress={this.state.loadingBarProgress}
        height={5}
        color='#00d8ff'
        onLoaderFinished={() => this.onLoaderFinished()}
      />
      <Header/>
      <Body textChange = {this.handleInputChange} outputLink = {this.state.userMessage}/>
      </div>
    );
  }
}
