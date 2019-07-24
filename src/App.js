import React from 'react';
import url from 'url'
import request from 'request'
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
    };
  }

  handleInputChange = event => {
    let self = this;
    const id = url.parse(event.target.value, true).query['ID'];
    if (id == null) {
      this.setState({
        userMessage: `Please enter a valid URL from panjabdigilib.org`
      })
    } else {
      const metaUrl = `http://panjabdigilib.org/webuser/searches/displayPage.jsp?ID=${id}&page=1&CategoryID=1`;
      var numPages = null;
      var pages = 1;
      var pagesLeft = 0;
      var buffer = [];
      request({
        uri: metaUrl,
      }, function(error, response, body) {
        var $ = cheerio.load(body);
        numPages = $('td').filter(function() {
          return $(this).text().trim() === 'Pages';
        }).next().text();
        pages = pagesLeft = parseInt(numPages);
        // this.updateUserProgress();
        for (let i = 1; i <= pages; i++) {
          const imageUrl = `http://panjabdigilib.org/images?ID=${id}&page=${i}&pagetype=null`;
          Jimp.read(imageUrl)
            .then(image => {
              // imagePromises.push(image.getBase64Async(Jimp.MIME_PNG));
              image.getBase64(Jimp.MIME_PNG, function(err, data) {
                if (err != null) {
                  console.log('error');
                } else {
                  console.log(`converted ${i}`)
                  buffer[i] = data;
                  pagesLeft -= 1;
                  self.setState({ userMessage: `Processing images... ${pagesLeft}/${pages} ਪਨੇ left`})
                  if (pagesLeft <= 0) {
                    self.setState({ userMessage: `Finished processing. Generating PDF...`})
                    var doc = new jsPDF()
                    for (let i = 1; i <= pages; i++) {
                        doc.addImage(buffer[i], 'PNG', 15, 40, 180, 160);
                        doc.addPage();
                        self.setState({ userMessage: `Generating PDF... ${i}/${pages} ਪਨੇ completed`})
                    }
                    self.setState({ userMessage: `PDF Complete. Downloading...`})
                    doc.save(`${id}.pdf`)
                    self.setState({ userMessage: `Download complete`})
                  }
                }
              });
            })
            .catch(err => {
              console.log("error")
            });
        }
      });

      this.setState({
        userMessage: `Processing images...`
      })
    };
    }

  render() {
    return (
      <div>
        <Header />
        <Body textChange={this.handleInputChange} outputLink={this.state.userMessage}/>
      </div>
    );
  }
}
