import { useParams, Navigate } from "react-router-dom";

import ContactForm from "../components/features/ContactForm";

const Edit = ({ contacts, updateContact }) => {
  const { id } = useParams();

  const contact = contacts.find(
    (contact) => contact.id === Number(id)
  );

  if (!contact) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container mt-4">
      <ContactForm
        initialData={contact}
        updateContact={updateContact}
      />
    </div>
  );
};

export default Edit;