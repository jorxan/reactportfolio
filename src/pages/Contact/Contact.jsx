import React from 'react'

function Contact() {
    return (
        <div>
        <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1> Contact</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 text-center"><a target="_blank" href="https://github.com/jorxan">
                <i className="fab fa-github-square fa-3x icons-links"></i></a>
            </div>

            <div className="col-lg-4 text-center">
                <a target="_blank" href="https://www.linkedin.com/in/jordan-albers-607201149/"><i className="fab fa-linkedin fa-3x icons-links"></i>
            </a>
        </div>

            <div className="col-lg-4 text-center">
                <a target="blank_" href="Resume.pdf"><i className="fas fa-file-pdf fa-3x icons-links"></i></a>
            </div>
        </div>
        <form>
            <div className="form-group">
              <label for="exampleFormControlInput1" >Email address</label>
              <input type="email" className="form-control"  placeholder="name@example.com" id="email"/>
            </div>
            
            
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="row">
                <div className="col-lg-12 error">
                    <h1> please enter a valid email address</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <button className="btn btn-primary buttons" id="submit">Sumbit</button>
                </div>
            </div>
          </form>
    </div>
    </div>
    )
}

export default Contact;