import React from 'react';
import { Link } from 'react-router';

export default function Campuses(props) {

    const campuses = props.campuses.list;
    const campusStudents = props.campuses.campusStudents;
    return (
        <div>
      
            <div className="row">
                {
                campuses && campuses.map(campus => (
                    <div className="col-thirds" key={ campus.id }>
                    <Link className="thumbnail" to={`/campus/${campus.id}`}>
                        <img src={ campus.imageLink } width="200" height="200" />
                        <div className="caption">
                        <h4>
                            <span>{ campus.name }</span> <br />
                        </h4>
                        </div>
                    </Link>
                    </div>
                ))
                }
            </div>
        </div>
    )
}