import { useState } from "react";
import Auth from "../../components/Forms/Auth/Auth";

export default function Login() {
  const [isPatient, setIsPatient] = useState(true);

  const handleSwitch = () => {
    setIsPatient(!isPatient);
  };

  return <Auth isPatient={isPatient} handleSwitch={handleSwitch} />;
}
