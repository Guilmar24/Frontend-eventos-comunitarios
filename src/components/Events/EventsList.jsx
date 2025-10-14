import React from 'react';

export default function EventsList() {
  return (
    <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h3 className="card-title mb-0">Eventos</h3>
        <span className="badge badge-light text-dark">Listado</span>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Lugar</th>
                <th>Capacidad</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="text-center text-muted">
                  Sin datos por ahora (placeholder).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary" disabled>
          <i className="fas fa-sync-alt mr-2"></i>Refrescar
        </button>
      </div>
    </div>
  );
}
