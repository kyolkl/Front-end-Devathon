import { Link } from "react-router-dom";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";

function Logo() {
  return (
    <Link to="/dashboard" className="flex items-center">
      <PiMicrosoftTeamsLogoFill fontSize={48} color="white" />
      <span className="text-2xl text-white font-bold">Team-6</span>
    </Link>
  );
}

export default Logo;
