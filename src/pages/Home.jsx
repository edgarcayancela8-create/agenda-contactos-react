import ContactList from "../components/features/ContactList";

const Home = ({ contacts }) => {
  return (
    <div className="container mt-4">
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Home;