
export const getData = async (url: string) => {
    const response = await fetch(url);

    if(!response.ok) throw Error(`Couldn't get data error code: ${response.status}`);

    const data = await response.json();
    return data;
};