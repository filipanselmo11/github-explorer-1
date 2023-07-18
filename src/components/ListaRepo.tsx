import { useState, useEffect } from "react";
import { ItemRepo } from "./ItemRepo";
import '../styles/repo.scss';

// https://api.github.com/orgs/rocketseat/repos

interface Repositorio {
    name: string;
    description: string;
    html_url: string;
}

export function ListaRepo() {
    const [repositorios, setRepositorios] = useState<Repositorio[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(res => res.json())
            .then(data => setRepositorios(data))
    }, [])
    return (
        <section className="lista-repo">
            <h1>
                Lista de Repositórios
            </h1>
            <ul>
                {repositorios.map(repositorioItem => {
                    return <ItemRepo key={repositorioItem.name} repositorio={repositorioItem}/>
                })}
            </ul>
        </section>
    );
}