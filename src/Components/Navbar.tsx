import NavbarItemDataType from '../types/NavbarItemDataType'

interface Props {
    data: NavbarItemDataType[]
}
const Navbar = (props: Props) => {
    const { data } = props
    return (
        <div className='navbar'>
            {data.map((item: NavbarItemDataType) => {
                return (
                    <div
                        className={`navbar__element navbar__element--${item.navbarIcon}`}
                    >
                        <i className={`icon icon--${item.navbarIcon}`}></i>
                        <span>{item.navbarTitle}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Navbar
