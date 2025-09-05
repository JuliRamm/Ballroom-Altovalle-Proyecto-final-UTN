export default async function NovedadItem(props){

    const{title,subtitle, imagen, body} = props;
    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen}></img>
            <p>{body}</p>
            <hr />

        </div>
    )
}