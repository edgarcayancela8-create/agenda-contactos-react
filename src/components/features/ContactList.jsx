import { Link } from "react-router-dom";

const ContactList = ({ contacts }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Listado de Contactos</h5>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <Link
                    to={`/editar/${contact.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Editar
                  </Link>

                  <button className="btn btn-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
