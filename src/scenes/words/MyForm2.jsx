import { TextField, Button } from '@mui/material';

function MyForm2() {
  return (
    <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <br />
        <label>
            Description:
            <textarea name="description" rows={10} />
        </label>
        <br />
        <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm2;