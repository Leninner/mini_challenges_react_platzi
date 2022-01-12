export const ButtonAddTodo = ({ showForm, setShowForm }) => {
  return (
    <div className='fixed bottom-0 right-0'>
      <button className='button' onClick={() => setShowForm(!showForm)}>
        +
      </button>
    </div>
  );
};
