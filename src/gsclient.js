export const createAPI = () => {
    const path = 'http://localhost:8080';

    const list = async () => {
        const rs = await fetch(path+'/list');
        const json = await rs.json();
        return json.data;
    }

    const query = async (sqls) => {
        const rs = await fetch(path+'/query', {method: 'post', body: JSON.stringify(sqls)});
        const json = await rs.json();
        return json.data;
    }

    return {
        list,
        query
    }
}
