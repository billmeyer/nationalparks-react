import React from 'react'

const NationalParks = ({nationalparks}) => {
    return (
        <div>
            <center><h1>National Parks</h1></center>
            {nationalparks.map((nationalpark) => (
                <div key={nationalpark.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{nationalpark.location_name}</h5>
                        <p className="card-text">{nationalpark.address}, {nationalpark.city} {nationalpark.state}, {nationalpark.zip_code}</p>
                        <h6 className="card-subtitle mb-2 text-muted">{nationalpark.phone_num}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default NationalParks
