import React from "react";
import { MovementVM } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";

interface Props {
  movementsList: MovementVM[];
}

export const MovementListTable: React.FC<Props> = (props) => {
  const { movementsList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>FECHA</span>
            <span className={classes.headerCell}>FECHA VALOR</span>
            <span className={classes.headerCell}>DESCRIPCIÓN</span>
            <span className={classes.headerCell}>IMPORTE</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          </div>

          {movementsList.map((movement) => (
            <div key={movement.id}>
              {movement.description} - {movement.amount}€
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
