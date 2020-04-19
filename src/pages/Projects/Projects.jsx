import React, {Component} from 'react';
import Projects from '../../projects.json';

class ProjectContainer extends Component {
    state = {
        Projects
    }
    render() {
        return (
            <div>
                <div className="Container">
            
            {this.state.Projects.map(project => (
            <div>
                <div className="row">
            <div className="col-lg-12 text-center">
                <div className="card">
                    <img src={project.image} className="card-img-top projects" />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.body}</p>
                      <a target="blank_" href={project.url} class="btn btn-primary buttons">Visit Site</a>
                    </div>
                  </div>
            </div>
        </div>
            </div>
            ))}
            </div>
            </div>
        )
    }
}

export default ProjectContainer
