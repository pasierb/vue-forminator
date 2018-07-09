export default function(attrs = []) {
    return function(obj) {
        const result = Object.assign({}, obj);

        for (let attr in attrs) {
            delete result[attr];
        }

        return result;
    }
}