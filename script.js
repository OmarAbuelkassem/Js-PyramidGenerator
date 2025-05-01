function generate() {
    let h = document.getElementById("menu").value;
    let pyramid = [];
    let row = "#";
    let f = h;
    for (let i = 1; i <= f; i++) {


        pyramid.push(("0".repeat(h - 1) + row.repeat(2 * i - 1) + "0".repeat(h - 1)));
        h -= 1;
        console.log(h)

    }
    for (x in pyramid) {
        const para = document.createElement('h1');
        para.innerHTML = pyramid[x];
        document.body.appendChild(para);
    }

}




