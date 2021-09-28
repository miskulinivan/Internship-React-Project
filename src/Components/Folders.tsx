import { FolderItemDataType } from '../types/FolderItemDataType'
import HeaderSecondary from './HeaderSecondary'

interface Props {
    data: FolderItemDataType[]
}

const Folders = (props: Props) => {
    const { data } = props
    return (
        <div className='folders'>
            <HeaderSecondary title='Folders' />
            <div className='row'>
                {data.map((item: FolderItemDataType) => {
                    return (
                        <div className='col col-12 col-lg-6 col-xl-4'>
                            <div className='folder'>
                                <div className='folder__dots '>...</div>
                                <div className='folder__header mt-2'>
                                    <i className='icon icon--folder'></i>
                                    <div
                                        style={{
                                            display: item.active ? '' : 'none',
                                        }}
                                        className='mr-3'
                                    >
                                        <img
                                            className='img folder--smallImage'
                                            src={item.imgUrl1}
                                            alt='amelia'
                                        />
                                        <img
                                            className='img folder--smallImage'
                                            src={item.imgUrl2}
                                            alt='thomas'
                                        />
                                        <img
                                            className='img folder--smallImage'
                                            src={item.imgUrl3}
                                            alt='emily'
                                        />
                                    </div>
                                </div>
                                <div className='folder--title mt-2 mb-2'>
                                    {item.name}
                                </div>

                                <div className='card__time--primary mt-2'>
                                    <i className='icon icon--clock'></i>
                                    <span className='ml-2'>
                                        Last Changes : {item.changedTime}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Folders
