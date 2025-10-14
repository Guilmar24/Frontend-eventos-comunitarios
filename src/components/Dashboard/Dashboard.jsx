import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Título */}
      <div className="mb-3">
        <h2 className="m-0">Dashboard - Eventos Comunitarios</h2>
      </div>

      {/* Métricas (sin spans de incrementos) */}
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body text-center">
              <div className="text-muted mb-1">Eventos Activos</div>
              <div className="display-4 text-success font-weight-bold">12</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body text-center">
              <div className="text-muted mb-1">Total Inscritos</div>
              <div className="display-4 text-primary font-weight-bold">248</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body text-center">
              <div className="text-muted mb-1">Presupuesto Pendiente</div>
              <div className="display-4 text-warning font-weight-bold">Q250,000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div className="card mb-3">
        <div className="card-header">
          <h3 className="card-title mb-0">Acciones Rápidas</h3>
        </div>
        <div className="card-body d-flex flex-wrap align-items-center">
          <NavLink to="/events/create" className="btn btn-primary mr-2 mb-2">
            <i className="fas fa-plus mr-2"></i>Nuevo Evento
          </NavLink>
          <button type="button" className="btn btn-success mr-2 mb-2">
            <i className="fas fa-chart-bar mr-2"></i>Ver Reportes
          </button>
          <NavLink to="/calendar" className="btn btn-secondary mb-2">
            <i className="far fa-calendar-alt mr-2"></i>Calendario
          </NavLink>
        </div>
      </div>

      {/* Eventos recientes */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title mb-0">Eventos Recientes</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Evento</th>
                  <th>Fecha</th>
                  <th>Inscritos</th>
                  <th>Estado</th>
                  <th>Presupuesto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Feria Gastronómica</td>
                  <td>25 Oct 2025</td>
                  <td>45/60</td>
                  <td><span className="badge badge-success">En curso</span></td>
                  <td>Q9,000</td>
                </tr>
                <tr>
                  <td>Festival de Música</td>
                  <td>30 Oct 2025</td>
                  <td>78/100</td>
                  <td><span className="badge badge-info">Programado</span></td>
                  <td>Q8,000</td>
                </tr>
                <tr>
                  <td>Taller de Manualidades</td>
                  <td>02 Nov 2025</td>
                  <td>15/25</td>
                  <td><span className="badge badge-secondary">Pendiente</span></td>
                  <td>Q3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
