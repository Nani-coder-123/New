// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (event) {
        if (this.getAttribute("href").startsWith("#")) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Image Hover Effect - Show Motivational Text
document.querySelectorAll(".progress-section img").forEach(image => {
    image.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease-in-out";
    });

    image.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});

// Daily Motivation Alert
const motivationQuotes = [
    "💪 Keep pushing your limits!",
    "📚 A page a day keeps ignorance away!",
    "🚀 Every small effort adds up!",
    "🔥 Consistency is the key to success!",
    "🏆 Don't stop until you're proud!"
];

setTimeout(() => {
    alert(motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)]);
}, 3000);
