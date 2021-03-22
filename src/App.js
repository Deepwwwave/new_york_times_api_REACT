import React from 'react';
import NewsList from './components/NewsList';
import './Style.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?',
      APIkey: 'mhfAeajDXetEpAWcEDKugniy5A8kC3oN',
      input:'',
      results: []
    }
  }

  handleChange = (e) => {
    this.setState({
      input:e.target.value
    })
    console.log(e.target.value)
  }

  handleSubmit = () => {
    console.log(this.state.input)
    this.query()
  } 

  query = () => {
    let url = `${this.state.baseURL}q=${this.state.input}&api-key=${this.state.APIkey}`
    fetch(url).then(response => {
      if(!response.ok) {
        console.log(response.satusText)
        return
      }
      return response.json()
    }).then(data => {
      let docs = data.response.docs
      // Remplissage de la variable docs avec les donées utiles
      let results = docs.map(doc => {
        let url = doc.web_url
        let headline = doc.headline
        let main = headline.main
        let date = doc.pub_date
        let byline = doc.byline
        let author = byline.original
        let id = doc._id
        return { id: id, title: main, date: date, url: url, author: author}
      })
      this.setState({ results : results})
    })
  }

  render() {
    return (

      <div className="App">
        <nav className="navbar navbar-default navbar-fixed-top navbar-light">.
          <div className="container margin-left" >
            <form className="card my-6"onSubmit={(e) => { e.preventDefault() ; this.handleSubmit() }}>
              <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                  <i className="fas fa-search h4 text-body"></i>
                </div>
                <div className="col">
                  <input className="form-control form-control-lg form-control-borderless" type="search"
                    placeholder="Search ..." onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="col-auto">
                  <button className="btn btn-lg btn-info" type="submit" > Search </button>
                </div>
              </div>
            </form>
          </div>
        </nav>
       <NewsList results ={this.state.results}/>

      </div>
    )
  }
}

export default App;
