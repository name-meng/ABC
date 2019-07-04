var a = 10;
var b = 1;
function fn() {
    var a = 12;
    console.log(a);
}
fn()
console.log(a)
var c;
console.log(c);
c = a;
function fn1() {
    console.log(c);
}
fn1()
var d = {}
function fn2() {
    var e = c;
    console.log(e)
}
fn2()
e = 12;
console.log(e)
