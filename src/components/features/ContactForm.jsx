const ContactForm = () => {
  return (
    <div className="card">

      <div className="card-body">

        <h5 className="card-title mb-4">
          Información del Contacto
        </h5>

        <form>

          <div className="mb-3">
            <label className="form-label">
              Nombre
            </label>

            <input
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Correo electrónico
            </label>

            <input
              type="email"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Teléfono
            </label>

            <input
              type="text"
              className="form-control"
            />
          </div>

          <button
            className="btn btn-primary"
            type="submit"
          >
            Guardar
          </button>

        </form>

      </div>

    </div>
  );
};

export default ContactForm;