import React from 'react'
const band1 = '/img/band1.png';
const truck1 = '/img/truck1.png';


export default function List() {
    const Box = (props) => {
        return (
            <div className={props.active ? 'box active' : 'box'}>
                <img src={props.src}></img>
                <div className='content'>
                    <h3>Jwala Band</h3>
                    <p>14th March, 2022</p>
                    <p>Time: 1PM to 2PM</p>
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <div className='list-wrapper'>
                <div className='row gx-5 gy-5'>
                    <div className='col-12 col-lg-6'>
                        <div className='box-wrapper'>
                            <h2>Bands List</h2>
                            <hr></hr>
                            <div className='d-flex flex-column'>
                                <label className='mb-2'>Select a Date</label>
                                <input type="date" placeholder='Select Date'></input>
                            </div>
                            <div className='card-wrapper'>
                                <Box src={band1} active={true} />
                                <Box src={band1} />
                                <Box src={band1} />
                                <Box src={band1} />
                                <button>Show More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='box-wrapper'>
                            <h2>Food Truck List</h2>
                            <hr></hr>
                            <div className='d-flex flex-column'>
                                <label className='mb-2'>Select a Date</label>
                                <input type="date" placeholder='Select Date'></input>
                            </div>

                            <div className='card-wrapper'>
                                <Box src={truck1} active={true} />
                                <Box src={truck1} />
                                <Box src={truck1} />
                                <Box src={truck1} />
                                <button>Show More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
