import Logo from '../assets/mappin.png';
import Search from '../assets/search.png';
import Profile from '../assets/testpic.jpg';

const Navbar = () => {
  //const [searchParam, setSearchParam] = useState("");
  return (
    <div className="sticky">
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-white">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-gray-200">
            <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
              <div>
                <img src={Logo} className="block btn- h-8 w-auto" alt="Logo" />
              </div>
              <p className='ml-10 text-xl'>MenuMap</p>
              <div className="lg:block mr-auto ml-40 hidden relative max-w-xs">
                <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="items-center justify-center flex">
                        <img src={Search} className="h-4" alt="Search" />
                      </span>
                    </span>
                  </span>
                </p>
              </div>
              <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                <div className="relative"></div>
                <div className="relative"></div>
                <div className="justify-center items-center flex relative">
                  <img
                    src={Profile}
                    className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300"
                    alt="User Profile"
                  />
                  <p className="font-semibold text-sm">User Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
