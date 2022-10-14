const Card = ({ title, phone, email }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{phone}</div>
      <div>{email}</div>
    </div>
  );
};

export default Card;
