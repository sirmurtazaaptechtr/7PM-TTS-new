const longCalc = () => {
    p1.innerText = "Performing long calculations...";
    let i, s = 0;
    for (i = 0; i <= 9876543210; i++) {
        s = s + i;
    }            
    p1.innerText += s;
}