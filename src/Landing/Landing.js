import '../index.css';
import List from '../List/List';
import Logo from './logo.jpg';

function Landing() {
  return (
    <div className="container mx-auto">
        <div className="grid justify-center p-5">
            <div className="flex flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                    <img src={Logo} alt="..." width="500" className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </div>
            </div>
        </div>

        <List />
    </div>
  );
}

export default Landing;
