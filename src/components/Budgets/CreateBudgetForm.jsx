import React, { useState } from 'react';
import InputField from '../UI/InputField.jsx';
import SelectField from '../UI/SelectField.jsx';
import TextareaField from '../UI/TextareaField.jsx';
import FormSection from '../UI/FormSection.jsx';

/**
 * CreateBudgetForm
 * Campos según especificación:
 * - originId: Integer (por defecto = 1; no se muestra en UI)
 * - requestAmount: BigDecimal (> 0, requerido)
 * - name: String (requerido)
 * - reason: String (requerido)
 * - requestDate: LocalDate (opcional; lo genera el servicio → no se pide en UI)
 * - email: String (requerido, formato válido)
 * - priorityId: Integer (1..3, requerido)
 */
export default function CreateBudgetForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    requestAmount: '',
    priorityId: '',
    reason: ''
  });

  const ORIGIN_DEFAULT = 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    // Suficiente para validación básica en front; el backend hará validación definitiva
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];

    const name = (form.name || '').trim();
    if (!name) errors.push('Nombre: es requerido.');

    const reason = (form.reason || '').trim();
    if (!reason) errors.push('Motivo/razón: es requerido.');

    const email = (form.email || '').trim();
    if (!email) errors.push('Email: es requerido.');
    else if (!validateEmail(email)) errors.push('Email: formato inválido.');

    const amount = parseFloat(form.requestAmount);
    if (isNaN(amount) || amount <= 0) errors.push('Monto solicitado: debe ser un número mayor a 0.');

    const priority = parseInt(form.priorityId, 10);
    if (isNaN(priority)) errors.push('Prioridad: es requerida.');
    else if (priority < 1 || priority > 3) errors.push('Prioridad: debe ser 1, 2 o 3.');

    if (errors.length > 0) {
      // eslint-disable-next-line no-alert
      alert(errors.join('\n'));
      return;
    }

    // Armado de payload (sin requestDate; el servicio lo autogenera)
    const payload = {
      originId: ORIGIN_DEFAULT,
      requestAmount: amount,
      name,
      reason,
      email,
      priorityId: priority
    };

    // Placeholder de envío
    // eslint-disable-next-line no-console
    console.log('Nuevo Presupuesto (payload):', payload);
    // eslint-disable-next-line no-alert
    alert('Presupuesto guardado (demo). Ver consola para payload.');

    // Reset básico del formulario
    setForm({
      name: '',
      email: '',
      requestAmount: '',
      priorityId: '',
      reason: ''
    });
  };

  const handleCancel = () => {
    setForm({
      name: '',
      email: '',
      requestAmount: '',
      priorityId: '',
      reason: ''
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Crear Presupuesto</h3>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="card-body">
          <FormSection
            title="Datos de la Solicitud"
            subtitle="Complete los campos obligatorios (*)"
          />

          <div className="form-row form-row-gap">
            <InputField
              label="Nombre"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre del solicitante"
              groupClass="form-group col-md-6"
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="correo@dominio.com"
              helpText="Debe ser un email válido."
              groupClass="form-group col-md-6"
            />
          </div>

          <div className="form-row form-row-gap">
            <InputField
              label="Monto Solicitado (Q)"
              name="requestAmount"
              type="number"
              required
              min={0.01}
              step={0.01}
              value={form.requestAmount}
              onChange={handleChange}
              helpText="Debe ser mayor a 0.00"
              groupClass="form-group col-md-6"
            />
            <SelectField
              label="Prioridad"
              name="priorityId"
              required
              value={form.priorityId}
              onChange={handleChange}
              placeholder="Seleccione prioridad"
              options={[
                { value: 1, label: '1 - Alta' },
                { value: 2, label: '2 - Media' },
                { value: 3, label: '3 - Baja' }
              ]}
              groupClass="form-group col-md-6"
            />
          </div>

          <FormSection title="Motivo" showDivider={false} />
          <div className="form-row form-row-gap">
            <TextareaField
              label="Razón / Descripción"
              name="reason"
              required
              value={form.reason}
              onChange={handleChange}
              charLimit={1000}
              placeholder="Explique brevemente el motivo del presupuesto"
              groupClass="form-group col-12"
            />
          </div>

          {/* Campo oculto: originId por defecto = 1 (solo para referencia; no es necesario si el backend lo asume por defecto) */}
          <input type="hidden" name="originId" value={ORIGIN_DEFAULT} readOnly />
        </div>

        <div className="card-footer">
          <div className="form-actions">
            <button type="button" className="btn btn-outline-secondary" onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Guardar presupuesto
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
