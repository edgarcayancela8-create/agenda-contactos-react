import ContactForm from "../components/features/ContactForm";

const Create = ({ addContact }) => {
  return (
    <div className="container mt-4">
      <ContactForm addContact={addContact} />
    </div>
  );
};

export default Create;