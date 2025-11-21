const method = document.getElementById("payment-method");
const visaBox = document.getElementById("visa-box");
const paypalBox = document.getElementById("paypal-box");
const vodaBox = document.getElementById("vodafone-box");

method.addEventListener("change", () => {
    visaBox.style.display = "none";
    paypalBox.style.display = "none";
    vodaBox.style.display = "none";

    if (method.value === "visa") visaBox.style.display = "block";
    if (method.value === "paypal") paypalBox.style.display = "block";
    if (method.value === "vodafone") vodaBox.style.display = "block";
});
