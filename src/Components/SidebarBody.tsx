import SidebarBodyItemDataType from '../types/SidebarBodyItemDataType'

interface Props {
    data: SidebarBodyItemDataType[]
}
const SidebarBody = (props: Props) => {
    const { data } = props
    return (
        <div className='sidebarbody flex--grow'>
            {data.map((item: SidebarBodyItemDataType) => {
                return (
                    <div>
                        <div className='sidebarbody__element'>
                            <div className='sidebarbody__name'>
                                <i
                                    className={`icon icon--${item.sidebarIcon}`}
                                ></i>
                                <div className='sidebarbody__title'>
                                    {item.sidebarTitle}
                                </div>
                            </div>
                            <div>{item.sidebarStorage}</div>
                        </div>
                        <div className={`progress--${item.sidebarColor}`}>
                            <div
                                className={`progress--${item.sidebarColor}__bar`}
                            ></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SidebarBody
