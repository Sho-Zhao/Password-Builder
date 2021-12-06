import 'bootstrap/dist/css/bootstrap.min.css';

export default function Display({message}){
    return(
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1 className="display">{message}</h1>
            </div>
            <div className="col-sm-1"></div>
        </div>
    );
}