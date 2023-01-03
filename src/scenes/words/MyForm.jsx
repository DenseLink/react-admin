import React from 'react';

function MyForm() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm