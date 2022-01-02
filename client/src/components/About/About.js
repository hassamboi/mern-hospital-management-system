import { useNavigate } from "react-router-dom";
import "./About.css";

// components
import Button from "../Button/Button";

export default function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className="about">
      <h1>welcome to the</h1>
      <h1>hospital management system</h1>

      <h3>Opening Hours</h3>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <td>Monday</td>
            <td>Tuesday</td>
            <td>Wednesday</td>
            <td>Thursday</td>
            <td>Friday</td>
            <td>Saturday</td>
            <td>Sunday</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Timings</th>
            <td>8:00 AM - 2:30 PM</td>
            <td>8:00 AM - 2:30 PM</td>
            <td>8:00 AM - 2:30 PM</td>
            <td>8:00 AM - 2:30 PM</td>
            <td>8:00 AM - 2:30 PM</td>
            <td>8:00 AM - 2:30 PM</td>
            <td>
              <strong>Closed</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <Button text={"Register Now"} handleClick={handleClick} />
    </div>
  );
}
