const farmMultiplierMap = new Map([
    ["svenssonsAlpacor", 1.3],
    ["alpacacenter", 4],
    ["karlssonsFarm", 8.6],
    ["importedAlpacas", 7.2],
]);

export async function postData(url = "", data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

export function calculateAlpacaCost(weight, farm) {
    return Math.round(weight * farmMultiplierMap.get(farm));
}
