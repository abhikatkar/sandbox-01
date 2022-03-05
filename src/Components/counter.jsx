function Magic(prop) {
  let { note } = prop;

  return (
    <div>
      <h1>Hello {note.first}</h1>
      <h1>Hello {note.last}</h1>
      <h1>Hello {note.age}</h1>
      <h1>Hello {note.date}</h1>
    </div>
  );
}

export { Magic };
