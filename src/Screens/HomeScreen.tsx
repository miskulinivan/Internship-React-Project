//components
import Main from '../Components/Main'
import Aside from '../Components/Aside'
import Sidebar from '../Components/Sidebar'
import { useState } from 'react'
interface Props {}

const HomeScreen = (props: Props) => {
    const [asideActive, setAsideActive] = useState<boolean>(false)
    const [sidebarActive, setSidebarActive] = useState<boolean>(false)
    return (
        <div className='layout'>
            <Aside
                asideActive={asideActive}
                handleAsideActive={() => setAsideActive(!asideActive)}
            />
            <Main
                handleAsideActive={() => setAsideActive(!asideActive)}
                handleSidebarActive={() => setSidebarActive(!sidebarActive)}
            />
            <Sidebar
                sidebarActive={sidebarActive}
                handleSidebarActive={() => setSidebarActive(!sidebarActive)}
                handleGoogleDrive={(value: string) => {
                    alert(value)
                }}
            />
        </div>
    )
}

export default HomeScreen
