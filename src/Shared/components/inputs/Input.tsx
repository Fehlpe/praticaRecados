import TextField from "@mui/material/TextField";

interface InputProps{
    id:string;
    type?:string;
    label:string;
}

const Input: React.FC<InputProps> = ({id, type, label}) => {
  return (
    <>
      <TextField
        type={type}
        id={id}
        label={label}
        variant="standard"
        fullWidth
        focused
        InputLabelProps={{sx:{color:"white"}}}
        inputProps={{sx:{color:"white"}}}
      />
    </>
  );
};

export default Input;
