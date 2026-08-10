const API_URL = "http://localhost:3000";

async function checkBackend() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log(data.message);
    } catch (error) {
        console.error("Backend connection failed:", error);
    }
}

checkBackend();