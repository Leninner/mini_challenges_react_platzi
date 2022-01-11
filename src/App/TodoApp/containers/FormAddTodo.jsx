export const FormAddTodo = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 w-full h-screen bg-black bg-opacity-50'>
      <form className='z-30'>
        <h1>Empieza a añadir tareas</h1>
        <label htmlFor='title'>
          Title:
          <input type='text' placeholder='Title of the task' name='title' />
        </label>
        <label htmlFor='description'>
          Description
          <textarea name='description' className='resize-y caret-red-500' />
        </label>
        <label htmlFor='date'>
          <input type='date' name='date' />
        </label>
      </form>
    </div>
  );
};
