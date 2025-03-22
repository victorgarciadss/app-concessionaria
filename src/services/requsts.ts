export async function fetchClientsPerPage(endpoint: string, page: number, rowsPerPage: number, token: string) {
    try{
        const response = await fetch(`http://localhost:8080/${endpoint}/paginado?page=${page}&size=${rowsPerPage}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
            cache: 'no-store'
        });

        if(!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        const resJson = await response.json();
        return resJson;

    } catch(err) {
        throw new Error(`Erro ao buscar clientes páginados:", ${err}`);
    }


}