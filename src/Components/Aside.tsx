import logo from '../assets/adidas.png'
import stan_lee from '../assets/stan_lee.jpg'

import Navbar from './Navbar'
import { NavbarItemDataType } from '../types/NavbarItemDataType'
import { useState } from 'react'

interface Props {
    asideActive: boolean
    handleAsideActive: () => void
}

const Aside = (props: Props) => {
    const navbarItemsData: NavbarItemDataType[] = [
        {
            navbarIcon: 'home',
            navbarTitle: 'Home',
        },
        {
            navbarIcon: 'file',
            navbarTitle: 'Shared File',
        },
        {
            navbarIcon: 'star',
            navbarTitle: 'Starred',
        },
        {
            navbarIcon: 'statistics',
            navbarTitle: 'Statistics',
        },
        {
            navbarIcon: 'setting',
            navbarTitle: 'Setting',
        },
        {
            navbarIcon: 'support',
            navbarTitle: 'Support',
        },
    ]
    return (
        <div className={`layout__aside ${props.asideActive ? 'active' : ''}`}>
            <div
                className='close close--aside '
                onClick={() => props.handleAsideActive()}
            >
                <i className='icon icon--close'></i>
            </div>
            <div className='flex--grow'>
                <div className='type--center'>
                    <img className='logo' src={logo} alt='logo' />
                </div>

                <div className='separator separator--aside'></div>

                <div className='user mt-3'>
                    <img
                        className='img user__image'
                        src={stan_lee}
                        alt='stan lee'
                    />
                    <div className='user--name'>Ryan Aldridge</div>
                </div>
                <div className='user__logout'>
                    <button className='btn--secondary'>Logout</button>
                    <div className='icon--arrowRight'></div>
                </div>
                <div className='separator separator--aside'></div>

                <Navbar data={navbarItemsData} />
            </div>

            <div className='asidefooter'>
                <div className='asidefooter__heading'>
                    <div className='navbar__element'>
                        <i className='icon icon--file'></i>
                    </div>
                    <div className='mt-1'>Move File</div>
                </div>

                <div>
                    <div className='btn btn--base btn--primary'>
                        Upload File
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aside
