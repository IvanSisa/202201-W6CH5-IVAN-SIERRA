import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeRobot, updateRobot } from "../../redux/robots/action-creators";

export function Robot({ robot }) {
  const dispatch = useDispatch();

  const deleteRobot = (robot) => {
    dispatch(removeRobot(robot));
  };
  const toggleRobot = (robot) => {
    dispatch(updateRobot(robot));
  };

  function handleClick() {
    deleteRobot(robot);
  }

  function handleChange() {
    toggleRobot({ ...robot, isCompleted: !robot.isCompleted });
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={robot.isCompleted}
        onChange={handleChange}
      />
      <Link to={`/detail/${robot.id}`}>
        <span className={robot.isCompleted ? "robot-completed" : ""}>
          {robot.name}
        </span>{" "}
        -<span>{robot.responsible}</span>
      </Link>

      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        🗑️
      </div>
    </li>
  );
}
