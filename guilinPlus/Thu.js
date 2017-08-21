function main(a, b) {
    a = a.toString() + b.toString();
    b = a.replace(b,'');
    a = a.replace(b,'');
    return [Number(a),Number(b)];
}
console.log(main(1, 2));