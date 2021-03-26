import React, { Component } from 'react'

export default class NewsList extends Component {
 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-2">
            <ul>
              {this.props.results.map(result => {
                return (<li key={result.id}><a href={result.url} target="_blank">{result.title}</a></li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}