import Button from '@mui/material/Button';

interface ButtonProps{
    
    children: string;
}


const Buttons: React.FC<ButtonProps> = ({ children}) =>{
    

    return(
        <>
            <Button onClick={()=>{alert("Clicou no botão")}} sx={{mt: 2}} variant="contained"> {children} </Button>
        </>
    );

}


export default Buttons;