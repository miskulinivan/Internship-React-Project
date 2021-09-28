import StorageItems from '../Components/StorageItems'
import Folders from '../Components/Folders'
import Table from '../Components/Table'
import Owners from '../Components/Owners'

//pictures
import googledrive from '../assets/googledrive.png'
import dropbox from '../assets/dropbox.jpg'
import onedrive from '../assets/onedrive.png'
import oscar from '../assets/oscar.jpg'
import amelia from '../assets/amelia.jpg'
import emily from '../assets/emily.jpg'
import thomas from '../assets/thomas.jpg'

import { useState } from 'react'
//dataTypes
import { StorageItemDataType } from '../types/StorageItemDataType'
import { OwnerItemDataType } from '../types/OwnerItemDataType'
import { FolderItemDataType } from '../types/FolderItemDataType'
import { TableItemDataType } from '../types/TableItemDataType'
interface Props {
    handleAsideActive: () => void
    handleSidebarActive: () => void
}
const Main = (props: Props) => {
    const storageItemsData: StorageItemDataType[] = [
        {
            imgUrl: googledrive,
            name: 'Google Drive',
            link: '',
            storageUsed: 70,
            storageAvailable: 100,
            changedTime: '22.2.2021',
            progressColor: 'primary',
            active: true,
        },
        {
            imgUrl: dropbox,
            name: 'Dropbox',
            link: '',
            storageUsed: 7,
            storageAvailable: 8,
            changedTime: '22.2.2021',
            progressColor: 'blue',
            active: false,
        },
        {
            imgUrl: onedrive,
            name: 'One Drive',
            link: '',
            storageUsed: 7,
            storageAvailable: 8,
            changedTime: '22.2.2021',
            progressColor: 'blue',
            active: false,
        },
    ]

    const ownerItemsData: OwnerItemDataType[] = [
        {
            imgUrl: oscar,
            name: 'Oscar Gilbert',
        },
        {
            imgUrl: amelia,
            name: 'Amelia Evans',
        },
        {
            imgUrl: emily,
            name: 'Thomas Flatcher',
        },
        {
            imgUrl: thomas,
            name: 'Emily Wilson',
        },
    ]
    const folderItemsData: FolderItemDataType[] = [
        {
            imgUrl1: amelia,
            imgUrl2: thomas,
            imgUrl3: emily,
            name: 'Dribbles',
            changedTime: '12.02.2020.',
            active: true,
        },
        {
            imgUrl1: amelia,
            imgUrl2: thomas,
            imgUrl3: emily,
            name: 'My Documents',
            changedTime: '12.02.2020.',
            active: false,
        },
        {
            imgUrl1: amelia,
            imgUrl2: thomas,
            imgUrl3: emily,
            name: 'Database',
            changedTime: '12.02.2020.',
            active: true,
        },
    ]
    const tableItemsData: TableItemDataType[] = [
        {
            documentIcon: 'doc',
            documentName: 'Last Guarter Statistics',
            size: 0.7,
            lastEdit: '10 March, 2020',
            imgUrl1: amelia,
            imgUrl2: thomas,
            imgUrl3: emily,
            active: true,
        },
        {
            documentIcon: 'jpg',
            documentName: 'Amelia',
            size: 1.5,
            lastEdit: '11 March, 2020',
            imgUrl1: amelia,
            imgUrl2: thomas,
            imgUrl3: emily,
            active: false,
        },
        {
            documentIcon: 'exe',
            documentName: 'February Stats',
            size: 0.5,
            lastEdit: '12 March, 2020',
            imgUrl1: amelia,
            imgUrl2: thomas,
            imgUrl3: emily,
            active: true,
        },
    ]
    return (
        <div className='layout__main'>
            <div className='hamburger'>
                <div
                    onClick={() => props.handleAsideActive()}
                    className='hamburger__aside'
                >
                    &#9776;
                </div>
                <div
                    onClick={() => props.handleSidebarActive()}
                    className='hamburger__sidebar'
                >
                    &#9776;
                </div>
            </div>
            <div className='header'>
                <div className='header__primary'>
                    <div>
                        <i className='icon icon--search'></i>
                        <span className='ml-1'>Search</span>
                    </div>
                    <div className='mr-1'>
                        <i className='icon icon--microphone '></i>
                    </div>
                </div>
                <div className='header--btn btn btn--base btn--primary'>
                    <i className='icon icon--plus mr-10'></i>
                    <span>Create New</span>
                </div>
            </div>

            <StorageItems data={storageItemsData} />
            <Owners data={ownerItemsData} />
            <Folders data={folderItemsData} />
            <Table data={tableItemsData} />
        </div>
    )
}

export default Main
