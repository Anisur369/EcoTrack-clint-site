import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center">
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.3ZB67oUt4Pt76Letpeh80AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="User avatar"
        className="w-12 h-12 rounded-full border border-slate-600"
      />
      <spand className="text-slate-100 font-medium">Anisur Rahman</spand>

    </div>
  );
};

export default Profile;
