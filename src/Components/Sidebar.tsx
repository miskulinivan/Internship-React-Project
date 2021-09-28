import SidebarBody from '../Components/SidebarBody'
import { SidebarBodyItemDataType } from '../types/SidebarBodyItemDataType'
import googledrive from '../assets/googledrive.png'
import { useState } from 'react'
interface Props {
    sidebarActive: boolean
    handleSidebarActive: () => void
    handleGoogleDrive: (value: string) => void
}

const Sidebar = (props: Props) => {
    const sidebarBodyItemsData: SidebarBodyItemDataType[] = [
        {
            sidebarIcon: 'media',
            sidebarTitle: 'Media File',
            sidebarStorage: 15,
            sidebarColor: 'darkblue',
        },
        {
            sidebarIcon: 'image',
            sidebarTitle: 'Images',
            sidebarStorage: 10,
            sidebarColor: 'green',
        },
        {
            sidebarIcon: 'document',
            sidebarTitle: 'Documents',
            sidebarStorage: 7,
            sidebarColor: 'orange',
        },
        {
            sidebarIcon: 'other',
            sidebarTitle: 'Other Files',
            sidebarStorage: 5,
            sidebarColor: 'purple',
        },
        {
            sidebarIcon: 'unknown',
            sidebarTitle: 'Unknown File',
            sidebarStorage: 8,
            sidebarColor: 'gray',
        },
    ]
    return (
        <div
            className={`layout__sidebar ${props.sidebarActive ? 'active' : ''}`}
        >
            <div
                className='close close--sidebar'
                onClick={() => props.handleSidebarActive()}
            >
                <i className='icon icon--close'></i>
            </div>
            <div className='sidebarheader'>
                <div className='sidebarheader__title mb-5'>
                    <img
                        className='img img--circle'
                        src={googledrive}
                        alt='google drive'
                    />
                    <div
                        onClick={() => props.handleGoogleDrive('jabuka')}
                        className='sidebarheader__title ml-4'
                    >
                        Google Drive
                    </div>
                </div>
                <div className='flex--primary type--wgt--600'>
                    <div>45 Gb</div>
                    <div>100 Gb</div>
                </div>
                <div className='progress--primary mt-3'>
                    <div className='progress--blue__bar'></div>
                </div>
            </div>
            <div className='separator mt-5 mb-7'></div>

            <SidebarBody data={sidebarBodyItemsData} />

            <div className='sidebarfooter'>
                <i className='icon icon--memory'></i>
                <div className='sidebarfooter__info'>
                    Clear memory<b> 124 MB</b> From Temporary Files
                </div>
                <div className='sidebarfooter__clear'>
                    <div className='mr-3'>CLEAR MEMORY</div>
                    <i className='icon icon--xcircle'></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
