interface Props {
    title: string
}

const HeaderSecondary = (props: Props) => {
    const { title } = props
    return (
        <div className='header--secondary'>
            <div>{title}</div>
            <i className='icon icon--threedots header--secondary--threedots '></i>
        </div>
    )
}

export default HeaderSecondary
