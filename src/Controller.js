import "./controller.css";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MenuItem, TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Controller({isCapital=false,isSymbol=false,checkChange=f=>f,textSize=12,sizeChange=f=>f}){
    const sizeValues=[8,12,16,24,30,40,50]
    return(
        <div className="controller">
            <div className='row'>
                        <div className="col-sm-7">
                            <TextField id="outlined-basic" label="パスワードのサイズ" variant="outlined" select helperText="パスワードのサイズ(文字数)を選択してください"
                            value={textSize} onChange={(event)=>sizeChange(event.target.value)}>
                                {sizeValues.map((sizeValue,i)=>(
                                    <MenuItem key={i} value={sizeValue}>
                                        {sizeValue}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className="col-sm-5">
                            <FormControlLabel control={<Switch checked={isCapital} onChange={(event)=>checkChange(event.target.name)} color="primary" name="isCapital"/>} label="大文字を使用"/>
                            <FormControlLabel control={<Switch checked={isSymbol} onChange={(event)=>checkChange(event.target.name)} color="primary" name="isSymbol"/>} label="記号を使用"/>
                        </div>
            </div>
        </div>       
    );
}