import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/Calendar.css';

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

function getMonthMatrix(current) {
  // Build a 6x7 = 42 day grid starting on Sunday of the first week that contains the 1st
  const firstOfMonth = new Date(current.getFullYear(), current.getMonth(), 1);
  const startWeekDay = firstOfMonth.getDay(); // 0 (Sun) .. 6 (Sat)
  const gridStart = addDays(firstOfMonth, -startWeekDay); // previous Sunday (or same day if Sunday)

  const days = [];
  for (let i = 0; i < 42; i += 1) {
    const d = addDays(gridStart, i);
    days.push(d);
  }
  return days;
}

const dayLabels = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];

export default function Calendar() {
  const [current, setCurrent] = useState(startOfDay(new Date()));
  const today = useMemo(() => startOfDay(new Date()), []);

  const monthLabel = useMemo(() => {
    try {
      const fmt = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' });
      return fmt.format(current).replace(/^\w/, (c) => c.toUpperCase());
    } catch (e) {
      // Fallback
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      return `${months[current.getMonth()]} ${current.getFullYear()}`;
    }
  }, [current]);

  const days = useMemo(() => getMonthMatrix(current), [current]);
  const thisMonth = current.getMonth();
  const isSameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const handlePrev = () => setCurrent((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const handleNext = () => setCurrent((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  const handleToday = () => setCurrent(startOfDay(new Date()));

  return (
    <div className="calendar-page">
      {/* Encabezado */}
      <div className="mb-2 d-flex align-items-center justify-content-between">
        <h2 className="m-0">Calendario de Eventos Comunitarios</h2>
        <NavLink to="/events/create" className="btn btn-success">
          <i className="fas fa-plus mr-2" />Nuevo Evento
        </NavLink>
      </div>
      <p className="text-muted mb-3">Visualización y gestión de todos los eventos programados</p>

      <div className="row">
        {/* Calendario principal */}
        <div className="col-lg-9 mb-3">
          <div className="card">
            <div className="card-body">
              {/* Toolbar */}
              <div className="d-flex align-items-center justify-content-between calendar-toolbar mb-3">
                <div className="btn-group" role="group" aria-label="Navegación">
                  <button type="button" className="btn btn-light" onClick={handlePrev} aria-label="Mes anterior">
                    <i className="fas fa-chevron-left" />
                  </button>
                  <button type="button" className="btn btn-light" onClick={handleNext} aria-label="Mes siguiente">
                    <i className="fas fa-chevron-right" />
                  </button>
                  <button type="button" className="btn btn-outline-secondary" onClick={handleToday}>today</button>
                </div>

                <div className="h5 m-0 font-weight-bold">{monthLabel}</div>

                <div className="btn-group" role="group" aria-label="Vistas">
                  <button type="button" className="btn btn-primary">month</button>
                  <button type="button" className="btn btn-light">week</button>
                  <button type="button" className="btn btn-light">day</button>
                </div>
              </div>

              {/* Encabezado de días */}
              <div className="calendar-grid calendar-grid-header">
                {dayLabels.map((l) => (
                  <div key={l} className="calendar-cell calendar-header text-primary">{l}</div>
                ))}
              </div>

              {/* Grilla del mes */}
              <div className="calendar-grid">
                {days.map((d, idx) => {
                  const outside = d.getMonth() !== thisMonth;
                  const isToday = isSameDay(d, today);
                  return (
                    <div
                      key={`${d.toISOString()}-${idx}`}
                      className={`calendar-cell ${outside ? 'outside-month' : ''} ${isToday ? 'calendar-today' : ''}`}
                    >
                      <div className="calendar-date text-muted">{d.getDate()}</div>
                      {/* Aquí podrían renderizarse chips de eventos */}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Barra inferior de acciones rápidas */}
            <div className="card-footer d-flex align-items-center justify-content-between flex-wrap">
              <div className="mb-2 mb-sm-0">
                <span className="font-weight-bold mr-2">Vista Rápida:</span>
                <div className="btn-group mr-2" role="group" aria-label="Rangos rápidos">
                  <button type="button" className="btn btn-light">Esta Semana</button>
                  <button type="button" className="btn btn-light">Próx. Semana</button>
                  <button type="button" className="btn btn-light">Este Mes</button>
                </div>
                <button type="button" className="btn btn-primary">Sincronizar</button>
              </div>
              <button type="button" className="btn btn-success">Notificar Cambios</button>
            </div>
          </div>
        </div>

        {/* Panel lateral derecho */}
        <div className="col-lg-3 mb-3">
          <div className="card mb-3">
            <div className="card-header">
              <h3 className="card-title mb-0">
                <i className="far fa-calendar-check mr-2" />
                Eventos de Hoy
              </h3>
            </div>
            <div className="card-body">
              <p className="text-muted mb-0">No hay eventos programados para hoy</p>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header">
              <h3 className="card-title mb-0">
                <i className="far fa-clock mr-2" />
                Próximos Eventos
              </h3>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0 text-muted small">
                <li>No hay próximos eventos</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title mb-0">
                <i className="fas fa-info-circle mr-2 text-primary" />
                Leyenda
              </h3>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0 small">
                <li className="d-flex align-items-center mb-1">
                  <span className="legend-dot bg-success mr-2" /> Confirmado
                </li>
                <li className="d-flex align-items-center mb-1">
                  <span className="legend-dot bg-warning mr-2" /> Pendiente
                </li>
                <li className="d-flex align-items-center">
                  <span className="legend-dot bg-info mr-2" /> En Proceso
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
