import "./controller.css";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MenuItem, TextField } from "@material-ui/core";

export default function Controller({isCapital=false,isSymbol=false,checkChange=f=>f,textSize=12,sizeChange=f=>f}){
    const sizeValues=[8,12,16,24,30,40,50]
    return(
        <div className="controller">
            <table>
                <tbody>
                <tr>
                        <td>
                            <TextField id="outlined-basic" label="パスワードのサイズ" variant="outlined" select helperText="パスワードのサイズ(文字数)を選択してください"
                            value={textSize} onChange={(event)=>sizeChange(event.target.value)}>
                                {sizeValues.map((sizeValue,i)=>(
                                    <MenuItem key={i} value={sizeValue}>
                                        {sizeValue}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </td>
                        <td>
                            <FormControlLabel control={<Switch checked={isCapital} onChange={(event)=>checkChange(event.target.name)} color="primary" name="isCapital"/>} label="大文字を使用"/>
                        </td>
                        <td>
                            <FormControlLabel control={<Switch checked={isSymbol} onChange={(event)=>checkChange(event.target.name)} color="primary" name="isSymbol"/>} label="記号を使用"/>
                        </td>
                </tr>
                </tbody>
            </table>
        </div>       
    );
}