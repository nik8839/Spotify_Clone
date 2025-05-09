import { FaMusic } from "react-icons/fa";
import { useUserData } from "../context/UserContext"; // Added missing import

const PlayListCard = () => {
  const { user, isAuth } = useUserData();
  console.log("isAuth:", isAuth);
  console.log("user:", user);
  console.log("User Playlist:", user?.playlist);
  if (!user) {
    console.warn("User is not available in PlayListCard.");
  }
  if (!user?.playlist || user.playlist.length === 0) {
    console.warn("Playlist is empty or not loaded.");
  }
  return (
    <>
      <div className="flex items-center p-4 rounded-lg shadow-md cursor-pointer hover:bg[#ffffff26]">
        <div className="w-10 h-10 bg-gray-600 flex items-center justify-center rounded-md">
          <FaMusic className="text-white text-xl" />
        </div>
        <div className="ml-4">
          <h2>My Playlist</h2>
          <p className="text-gray-400 text-sm">
            PlayList • {isAuth  ? (
              <span>{user?.name}</span>
            ) : (
              <span>{"User"}</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default PlayListCard;