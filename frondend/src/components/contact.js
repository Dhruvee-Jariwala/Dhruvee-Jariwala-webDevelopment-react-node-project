import React from 'react'
export class Contact extends React.Component {
  constructor(){
    super();
    this.state={
      name:null,
      email: null,
      message:null
    }
  }
  handleSubmit(){

    fetch('http://localhost:8080/contacts',{
      method:'Post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("your query is send successfully");
      })
    })
  }
  render(){
    return (
      <div>
        <div id='contact'>
          <div className='container'>
            <div className='col-md-8'>
              <div className='row'>
                <div className='section-title'>
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email with you query and we will
                    get back to you as soon as possible.
                  </p>
                </div>
                {/* <form name='sentMessage' validate onSubmit={()=>{this.handleSubmit();}}> */}
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text' id='name' name='name' className='form-control' placeholder='Name' required
                          onChange={(event)=>{
                            this.setState({name: event.target.value})
                          }}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Email'
                          required
                          onChange={(event)=>{
                            this.setState({email: event.target.value})
                          }}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Message'
                      required
                      onChange={(event)=>{
                        this.setState({message: event.target.value})
                      }}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                  <button type='submit' onClick={()=>{
                    this.handleSubmit()
                  }} className='btn btn-custom btn-lg'>
                    Send Message
                  </button>
                {/* </form> */}
              </div>
            </div>
            <div className='col-md-3 col-md-offset-1 contact-info'>
              <div className='contact-item'>
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className='fa fa-map-marker'></i> Address
                  </span>.
                  HAPPY HOME GROUP \"SHANTINIKETAN\" 1st & 2nd Floor, Near S.D. Jain School, University-Airport Road, Vesu Cross Road, Surat 395 007 Gujarat (India)
                  {/* {props.data ? props.data.address : 'loading'} */}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-phone'></i> Phone
                  </span>{' '}
                  +91 90999 31023
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> Email
                  </span>{' '}
                  inquiry@happyhomegroup.in
                </p>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='row'>
                <div className='social'>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/i/flow/login">
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='footer'>
          <div className='container text-center'>
            <p>
              &copy; Dream City. Design by{' VDR '}
            </p>
          </div>
        </div>
      </div>
    )
  }
    
}
