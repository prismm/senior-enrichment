import React from 'react';

export default function ViewCampus(props) {
    const selectedCampus = props.campus;

    return (
        <div>
            <h3>PLACEHOLDER FOR ViewCampus</h3>
            <h3>${selectedCampus.name}</h3>
        </div>
    )
}