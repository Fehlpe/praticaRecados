import TextField from "@mui/material/TextField";

interface InputProps{
    id:string;
    type?:string;
    label:string;
    state?:any;
}

const Input: React.FC<InputProps> = ({id, type, label, state}) => {

  return (
    <>
      <TextField
        type={type}
        id={id}
        label={label}
        variant="standard"
        onChange={state}
        fullWidth
        focused
        InputLabelProps={{sx:{color:"white"}}}
        inputProps={{sx:{color:"white"}}}
      />
    </>
  );
};

export default Input;
