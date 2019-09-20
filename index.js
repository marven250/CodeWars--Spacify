function spacify(str) {
    let string = ""
    for (let i = 0; i < str.length; i++) {
        string += str[i] + " "
    }
    let stringer = string.split(" ")
    stringer.pop()
    return stringer.join(" ")
}