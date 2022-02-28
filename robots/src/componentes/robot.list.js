import "./todo.css";
import { Add } from "./add";
import { Robot } from "./robot";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRobots } from "../../redux/tasks/action-creators";
import { Robots } from "../../models/robots.data";

export function RobotList() {
  const robots = useSelector((state) => state.robots);
  console.log({ robots });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobots(Robots));
  }, []);

  return (
    <>
      <Add />
      {robots.length ? (
        <>
          <h2>Lista de Robots</h2>
          <ul className="robot-list">
            {robots.map((robot) => (
              <Robot robot={robot} key={robot.id} />
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
