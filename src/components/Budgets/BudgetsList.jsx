import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BudgetsList() {
  return (
    <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h3 className="card-title mb-0">Presupuestos</h3>
        <NavLink to="/budgets/create" className="btn btn-primary">
          <i className="fas fa-plus mr-2" />Nuevo Presupuesto
        </NavLink>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Monto Solicitado</th>
                <th>Prioridad</th>
                <th>Fecha de Solicitud</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="text-muted text-center">
                  No hay presupuestos registrados aún.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
