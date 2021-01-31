import React from 'react';
import './Style.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input:'',

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
  } 

  render() {
    return (

      <div className="App">
        <nav className="navbar navbar-default navbar-fixed-top navbar-light">
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

      </div>
    )
  }
}

export default App;
