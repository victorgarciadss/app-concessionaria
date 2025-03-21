
import CustomTable from "@/components/table/CustomTable";
import { cookies } from "next/headers";

async function getClients() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;
        
        const response = await fetch("http://localhost:8080/clientes/paginado", {
            headers: {
                "Authorization": `Bearer ${token}`, // Substitua pelo token real
                "Content-Type": "application/json"
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        return response.json();


    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        return [];
    }
}

const columns = [
    { id: "id", label: "id" },
    { id: "name", label: "nome" },
    { id: "cpf", label: "CPF" },
    { id: "adress", label: "Endereço" },
    { id: "age", label: "idade" }
]

export default async function Clients() {

    const clients = await getClients();
    console.log(clients)

    return (
        <main>
            {/* <CustomTable columns={columns} /> */}
        </main>
    )
}