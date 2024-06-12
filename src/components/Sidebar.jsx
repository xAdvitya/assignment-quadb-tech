import { BookCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ children }) {
  const navigate = useNavigate();

  return (
    <aside className="h-screen w-full">
      <nav className="h-full flex-col bg-white border-r shadow-sm">
        <div className="flex items-center gap-1 p-3" onClick={()=>navigate("/")}>
          <BookCheck size={30} />
          <span className="ml-4 font-semibold text-gray-700 text-xl">
            Prod Tasks
          </span>
        </div>

        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
}
const checkPath = (path) => {
  // console.log(location.pathname, path);
  if (path === location.pathname) return true;
  else return false;
};

export function SidebarItem({ icon, text, active, path }) {
  active = checkPath(path);
  const navigate = useNavigate();
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
      onClick={() => navigate(path)}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${"w-52 ml-3"}`}>
        {text}
      </span>
    </li>
  );
}
