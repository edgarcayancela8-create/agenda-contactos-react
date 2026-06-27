import { useState } from "react";

import {
  validateName,
  validateEmail,
  validatePhone,
} from "../../utils/validators";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const isNameValid = validateName(form.name);
  const isEmailValid = validateEmail(form.email);
  const isPhoneValid = validatePhone(form.phone);

  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isPhoneValid;

  return (
    <div className="card">
      <div className="card-body">

        <h5 className="card-title mb-4">
          Información del Contacto
        </h5>

        <form>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>

            <input
              id="name"
              name="name"
              type="text"
              className={`form-control ${
                form.name === ""
                  ? ""
                  : isNameValid
                  ? "is-valid"
                  : "is-invalid"
              }`}
              value={form.name}
              onChange={handleChange}
            />

            {!isNameValid && form.name !== "" && (
              <div className="invalid-feedback">
                Ingrese al menos 2 caracteres.
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              className={`form-control ${
                form.email === ""
                  ? ""
                  : isEmailValid
                  ? "is-valid"
                  : "is-invalid"
              }`}
              value={form.email}
              onChange={handleChange}
            />

            {!isEmailValid && form.email !== "" && (
              <div className="invalid-feedback">
                Ingrese un correo válido.
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>

            <input
              id="phone"
              name="phone"
              type="text"
              className={`form-control ${
                form.phone === ""
                  ? ""
                  : isPhoneValid
                  ? "is-valid"
                  : "is-invalid"
              }`}
              value={form.phone}
              onChange={handleChange}
            />

            {!isPhoneValid && form.phone !== "" && (
              <div className="invalid-feedback">
                Ingrese al menos 7 números.
              </div>
            )}
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={!isFormValid}
          >
            Guardar
          </button>

        </form>

      </div>
    </div>
  );
};

export default ContactForm;