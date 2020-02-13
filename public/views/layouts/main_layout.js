module.exports = function(body, api_link, workout_link, index_link) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/style.css"/>
    <title>Fitness Tracker</title>
</head>

<body>
${body}
    <script src="${api_link}"></script>
    <script src="${workout_link}"></script>
    <script src="${index_link}"></script>
    
    
</body>

</html>`;
};

{/* <script>
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("./public/views/service-worker.js").then(reg => {
            console.log("We found your service worker file!", reg);
          });
        });
      }
    </script> */}