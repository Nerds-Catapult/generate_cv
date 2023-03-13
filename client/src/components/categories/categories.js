import React from 'react'
import './categories.scss'
import { Link } from 'react-router-dom';

export const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/2085521/pexels-photo-2085521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <button>
                        <Link className="link" to="/product">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/2085521/pexels-photo-2085521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <button>
                        <Link className="link" to="/product">Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/2085521/pexels-photo-2085521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <button>
                        <Link className="link" to="/product">Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col col-1">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/2085521/pexels-photo-2085521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            <button>
                                <Link className="link" to="/product">Sale</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/2085521/pexels-photo-2085521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            <button>
                                <Link className="link" to="/product">Sale</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/2085521/pexels-photo-2085521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <button>
                        <Link className="link" to="/product">Sale</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
