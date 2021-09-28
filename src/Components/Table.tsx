import TableItemDataType from '../types/TableItemDataType'
import HeaderSecondary from './HeaderSecondary'

interface Props {
    data: TableItemDataType[]
}

const Table = (props: Props) => {
    const { data } = props
    return (
        <div className='table'>
            <HeaderSecondary title='Last File' />
            <div className='table__header'>
                <div className='table-width1 ml-1'>
                    <input
                        type='checkbox'
                        className='align--middle'
                        name=''
                        id=''
                    />
                </div>
                <div className='table-width2'>
                    <span>Type</span>
                    <i className='icon icon--arrowDown '></i>
                </div>
                <div className='table-width3'>
                    <span>Document Name</span>
                    <i className='icon icon--arrowDown '></i>
                </div>
                <div className='table-width4'>
                    <span>Size</span>
                    <i className='icon icon--arrowDown '></i>
                </div>
                <div className='table-width5'>
                    <span>Last Edit</span>
                    <i className='icon icon--arrowDown '></i>
                </div>
                <div className='table-width6'>
                    <span>Members</span>
                    <i className='icon icon--arrowDown '></i>
                </div>
                <div className='table-width7'>
                    <span></span>
                </div>
            </div>
            {data.map((item: TableItemDataType) => {
                return (
                    <div className='table__row mt-2'>
                        <div className='table-width1'>
                            <input
                                className='align--middle'
                                type='checkbox'
                                name=''
                                id=''
                            />
                        </div>
                        <div className='table-width2'>
                            <i className={`icon--${item.documentIcon}`}></i>
                        </div>
                        <div className='table__tag--primary table-width3'>
                            <span>{item.documentName}</span>
                        </div>
                        <div className='table-width4'>
                            <span className='table__tag--primary'>
                                {item.size}
                            </span>
                            <span className='table__tag--secondary'> MB</span>
                        </div>
                        <div className='table__tag--primary table-width5'>
                            <span>{item.lastEdit}</span>
                        </div>
                        <div className='table-width6'>
                            <div className='table__images'>
                                <img
                                    style={{
                                        display: item.active ? '' : 'none',
                                    }}
                                    className='img folder--smallImage align--middle '
                                    src={item.imgUrl1}
                                    alt='amelia'
                                />
                                <img
                                    className='img folder--smallImage align--middle'
                                    src={item.imgUrl2}
                                    alt='thomas'
                                />
                                <img
                                    style={{
                                        display: item.active ? '' : 'none',
                                    }}
                                    className='img folder--smallImage align--middle'
                                    src={item.imgUrl3}
                                    alt='emily'
                                />
                            </div>
                        </div>
                        <div className='table-width7'>
                            <i className='icon icon--verticaldots'></i>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Table
