import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between w-9/12 mx-auto'>
            <h1 className='text-5xl'>knowledge cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;