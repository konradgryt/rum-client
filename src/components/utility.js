class Utility {
    static get (path) {
        return fetch('http://192.168.0.100:8080' + path).then(res => res.json());
    }

    static post (path, object) {
        return fetch('http://192.168.0.100:8080' + path, {
            body: object,
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json()) ;
    }

    static saveToLocalStorage(key,value) {
        localStorage.setItem(key, value);
    }

    static getFromLocalStorage(key) {
        var value = localStorage.getItem(key);
        return value === null ? '' : value;
    }
}

export default Utility;