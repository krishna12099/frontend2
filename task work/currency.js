function calculateTotal() {
    // Get the number of each note
    let note2000 = parseInt(document.getElementById("note2000").value) || 0;
    let note500  = parseInt(document.getElementById("note500").value) || 0;
    let note200  = parseInt(document.getElementById("note200").value) || 0;
    let note100  = parseInt(document.getElementById("note100").value) || 0;
    let note50   = parseInt(document.getElementById("note50").value) || 0;
    let note20   = parseInt(document.getElementById("note20").value) || 0;
    let note10   = parseInt(document.getElementById("note10").value) || 0;

    // Calculate total amount
    let totalAmount = 
        (note2000 * 2000) +
        (note500  * 500)  +
        (note200  * 200)  +
        (note100  * 100)  +
        (note50   * 50)   +
        (note20   * 20)   +
        (note10   * 10);

    // Display total
    document.getElementById("totalAmount").innerText = totalAmount;
}
