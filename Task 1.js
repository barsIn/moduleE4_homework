function getKeysAndValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key)
            console.log(obj[key])
        }
    }
}
