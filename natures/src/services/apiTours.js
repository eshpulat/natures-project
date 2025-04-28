const API_URL = "http://localhost:3000/api/v1";

export async function getTours() {
    const res = await fetch(`${API_URL}/tours`);

    if (!res.ok) throw Error("Faild getting tours");
    const { data } = await res.json();

    return data;
}

// const API_URL = "http://localhost:3000/api/v1";

// export async function getTours() {
//     try {
//         // Fetch data from the correct endpoint
//         const res = await fetch(`${API_URL}/tours`);

//         // Check if the response is OK (status 200-299)
//         if (!res.ok) {
//             throw new Error(`Failed to fetch tours: ${res.statusText}`);
//         }

//         // Parse the JSON response
//         const { data } = await res.json();
//         return data;
//     } catch (error) {
//         console.error("Error in getTours:", error);
//         throw error; // rethrow the error after logging it
//     }
// }
