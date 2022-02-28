export const farmMultiplierMap = new Map([
    ["svenssonsAlpacor", 1.3],
    ["alpacacenter", 4],
    ["karlssonsFarm", 8.6],
    ["importedAlpacas", 7.2],
]);

export const postData = async (url = "", data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};
