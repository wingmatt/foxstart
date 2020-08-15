const request = new XMLHttpRequest()

request.open('GET', 'https://randomfox.ca/floof/', true)
request.onload = function () {
  // Begin accessing JSON data here
  const data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    const foxUrl = data.image
    const foxLink = data.link
    const foxHtml = document.createElement("img");
    foxHtml.src = foxUrl;
    const container = document.getElementById("fox-box");
    
    container.appendChild(foxHtml);
  } else {
    console.log('error')
  }
}

request.send()

function focusInput() {
  const input = document.getElementById("google-search").focus();
}