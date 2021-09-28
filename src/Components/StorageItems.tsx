import { StorageItemDataType } from '../types/StorageItemDataType'

interface Props {
    data: StorageItemDataType[]
}

const StorageItems = (props: Props) => {
    const { data } = props

    return (
        <div className='row'>
            {data.map((item: StorageItemDataType) => {
                let progress = (item.storageUsed / item.storageAvailable) * 100
                return (
                    <div className='col col-12 col-lg-6 col-xl-4'>
                        <div
                            className={`card card--primary ${
                                item.active ? 'active' : ''
                            }`}
                        >
                            <div className='card__header'>
                                <img
                                    className='img--circle'
                                    src={item.imgUrl}
                                    alt='googledrive'
                                />
                                <div className='ml-2'>
                                    <div className='type--lg'>{item.name}</div>
                                    <a
                                        className={`anchor--primary ${
                                            item.active ? 'active' : ''
                                        }`}
                                        href={item.link}
                                    >
                                        Open folder
                                    </a>
                                </div>
                            </div>
                            <div className='flex--primary type--wgt--600 mt-2'>
                                <div>{item.storageUsed} GB</div>
                                <div>{item.storageAvailable} GB</div>
                            </div>
                            <div className={`progress--${item.progressColor}`}>
                                <div
                                    style={{
                                        width: `${progress.toString()}%`,
                                    }}
                                    className={`progress--${item.progressColor}__bar`}
                                ></div>
                            </div>
                            <div
                                className={`card__time--primary ${
                                    item.active ? 'active' : ''
                                }`}
                            >
                                <i
                                    className={`icon icon--clock${
                                        item.active ? '--white' : ''
                                    }`}
                                ></i>
                                <span className='ml-2'>
                                    Last changes: {item.changedTime}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default StorageItems
