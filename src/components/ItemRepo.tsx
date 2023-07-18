
interface ItemRepoProps {
    repositorio: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function ItemRepo(props:ItemRepoProps) {
    return (
        <li>
            <strong>{props.repositorio.name}</strong>
            <p>{props.repositorio.description}</p>
            <a href={props.repositorio.html_url}>
                Acessar Repo
            </a>
        </li>
    );
}