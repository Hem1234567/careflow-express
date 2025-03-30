
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const AuthButtons = () => {
  const { user, signOut } = useAuth();

  if (user) {
    return (
      <Button 
        variant="outline" 
        onClick={signOut}
        className="ml-4"
      >
        Sign Out
      </Button>
    );
  }

  return (
    <Link to="/auth" className="ml-4">
      <Button>Sign In</Button>
    </Link>
  );
};

export default AuthButtons;
