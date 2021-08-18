import "./controller.css";

const Controlls=[
    {
        name:"textSize",
        type:"number",
        labelmessage:"パスワードのサイズ",
        min:"8",
        max:"50",
    },
    {
        name:"isCapital",
        type:"checkbox",
        labelmessage:"大文字を使用",
    },
    {
        name:"isSymbol",
        type:"checkbox",
        labelmessage:"記号を使用",
    }
]

export default function Controller(){
    return(
        <div class="controller">
            <table>
                <tr>
                    {Controlls.map((Controlls)=>(
                        <td>
                            <label for={Controlls.name}>{Controlls.labelmessage}</label>
                            {Controlls.type==="number"
                            ?<input type={Controlls.type} name={Controlls.name} min={Controlls.min} max={Controlls.max}/>
                            :<input type={Controlls.type} name={Controlls.name}/>
                            }
                        </td>
                    ))}
                </tr>
            </table>
        </div>       
    );
}