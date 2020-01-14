import React from "react";
import PropTypes from "prop-types";
import style from "./Contacts.module.css";
import Contact from "./Contact";

const Contacts = ({ contacts, deleteFunc }) => {
  return (
    <div className={style.wrapper}>
      <h2>Contacts</h2>

      <ul>
        {contacts.map(el => {
          return <Contact deleteFunc={deleteFunc} key={el.id} el={el} />;
        })}
      </ul>
    </div>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  deleteFunc: PropTypes.func.isRequired
};
export default Contacts;
