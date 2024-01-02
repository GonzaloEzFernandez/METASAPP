export async function pedirMetas() {
    const response = await fetch("/metas/json")
    const goals = await response.json()
    return goals;
}