import React from "react";
import classes from "./movement-list-header.component.module.css";

export const MovementListHeader: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <h1>Saldos y últimos movimientos</h1>
        <div className={classes.balanceData}>
          <h3>SALDO DISPONIBLE</h3>
          <p className={classes.balanceEuros}>4.500 €</p>
        </div>
      </div>
      <div className={classes.accountContainer}>
        <p>Alias:</p>
        <p>IBAN:</p>
      </div>
    </div>
  );
};
