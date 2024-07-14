// src/Sidebar.js
import { Link } from "react-router-dom";
import { Book } from "lucide-react";
import { Milk } from "lucide-react";
import { Home } from "lucide-react";
import { Donut } from "lucide-react";
import { Bolt } from "lucide-react";
import Avatar from "./components/Avtar";

const Sidebar = () => {
  return (
    <div className="h-screen w-15 flex flex-col border-r-2">
      <nav className="flex flex-col flex-1 mt-4">
        <div className="flex-col">
          <div className=" flex flex-col">
            <div className="p-5 flex items-center">
              <Avatar />
            </div>

            <div>
              <Link to="/home" className="p-5 flex items-center">
                <Home size={20} />
              </Link>
              <Link to="/sugar" className="p-5 flex items-center">
                <Donut size={20} />
              </Link>
              <Link to="/artical" className="p-5 flex items-center">
                <Book size={20} />
              </Link>
              <Link to="/water" className="p-5 flex items-center">
                <Milk size={20} />
              </Link>
              <Link to="/settings" className="p-5 flex items-center">
                <Bolt size={20} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
