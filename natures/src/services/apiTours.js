export async function getTours() {
    const res = await fetch("http://localhost:3000/api/v1/tours");

    if (!res.ok) throw new Error("Failed to fetch tours");

    const responseData = await res.json();

    return responseData.data;
}
