// import axios from "axios";
import React from "react"

export class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: "" }
  }
  componentDidMount() {
    //calling api
    fetch('http://localhost:8080/projects').then((res) => {
      res.json().then((result) => {
        this.setState({ projects: result })
      })
    })
  }

  render() {
    return (
      <div id='features' className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'>
            <h2>Projects</h2>
          </div>
          <div className='row'>
            {
              this.state.projects ?
                this.state.projects.map((project, i) => (
                  <div key={`${project.name}-${i}`} className='col-xs-6 col-md-3'>
                    {' '}
                    <i className="fa fa-group"></i>
                    <h3>{project.name}</h3>
                    <p>{project.releaseDate}</p>
                  </div>
                ))
                :'Loading..'
            }
          </div>
        </div>
      </div>
    )
  }
}
