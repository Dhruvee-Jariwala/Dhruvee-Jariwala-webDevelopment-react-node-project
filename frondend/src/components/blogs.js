import React from "react"

export class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs: "" }
  }
  componentDidMount() {
    //calling api
    fetch('http://localhost:8080/blogs').then((res) => {
      res.json().then((result) => {
        this.setState({ blogs: result })
      })
    })
  }
  render(){
    return (
      <div id='services' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Blogs</h2>
          </div>
          <div className='row'>
            {this.state.blogs
              ? this.state.blogs.map((blog, i) => (
                  <div key={`${blog.title}-${i}`} className='col-md-4'>
                    {' '}
                    <i className="fa fa-cloud-download"></i>
                    <div className='service-desc'>
                      <h3>{blog.title}</h3>
                      <p>{blog.excerpt}</p>
                      <p><b>Content: </b>{blog.content}</p>
                      <p><b>Author: </b>{blog.author}</p>
                      <p><b>Date: </b>{blog.date}</p>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }

}
