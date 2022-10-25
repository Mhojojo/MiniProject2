function showAll() {
    document.querySelectorAll(".forRent").forEach(show => show.style.display = "initial")
    document.querySelectorAll(".forSale").forEach(show => show.style.display = "initial")
}

function forSale() {
    document.querySelectorAll(".forRent").forEach(hide => hide.style.display = "none")
    document.querySelectorAll(".forSale").forEach(hide => hide.style.display = "initial")
}

function forRent() {
    document.querySelectorAll(".forSale").forEach(hide2 => hide2.style.display = "none")
    document.querySelectorAll(".forRent").forEach(hide => hide.style.display = "initial")
}