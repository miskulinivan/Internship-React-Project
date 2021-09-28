import HeaderSecondary from '../Components/HeaderSecondary'
import { OwnerItemDataType } from '../types/OwnerItemDataType'

interface Props {
    data: OwnerItemDataType[]
}

const Owners = (props: Props) => {
    const { data } = props
    return (
        <div className='names'>
            <HeaderSecondary title='Owners' />
            <div className='row'>
                {data.map((item: OwnerItemDataType) => {
                    return (
                        <div className='col col-12 col-lg-6 col-xl-3'>
                            <div className='names__card'>
                                <img
                                    className='img img--square'
                                    src={item.imgUrl}
                                    alt='oscar'
                                />
                                <div className='names__header'>
                                    <div className='type--wgt--bold type--color--primary'>
                                        {item.name}
                                    </div>
                                    <div className='names__footer'>
                                        Can Edit
                                        <i className='icon icon--arrowDown '></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Owners
