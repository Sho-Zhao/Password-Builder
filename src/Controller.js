import "./controller.css";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MenuItem, TextField } from "@material-ui/core";

export default function Controller({isCapital=false,isSymbol=false,handleChange=f=>f}){
    const sizeValues=[8,12,16,24,30,40,50]
    return(
        <div className="controller">
            <table>
                <tbody>
                <tr>
                        <td>
                            <TextField id="outlined-basic" label="パスワードのサイズ" variant="outlined" select helperText="パスワードのサイズ(文字数)を選択してください">
                                {sizeValues.map((sizeValue,i)=>(
                                    <MenuItem key={i} value={sizeValue}>
                                        {sizeValue}
                                    </MenuItem>
                                ))}
                            </TextField>
                            {/*<label htmlFor="textSize">パスワードのサイズ</label>
                            <input type="number" name="textSize" min="8" max="50"/>*/}
                        </td>
                        <td>
                            <FormControlLabel control={<Switch checked={isCapital} onChange={()=>handleChange("isCapital")} name="isCapital"/>} label="大文字を使用"/>
                            {/*<button onClick={()=>handleChange("isCapital")}>大文字を使用</button>*/}
                        </td>
                        <td>
                            <FormControlLabel control={<Switch checked={isSymbol} onChange={()=>handleChange("isSymbol")} name="isSymbol"/>} label="記号を使用"/>
                            {/*<button onClick={()=>handleChange("isSymbol")}>記号を使用</button>*/}
                        </td>
                </tr>
                </tbody>
            </table>
        </div>       
    );
}