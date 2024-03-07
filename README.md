<!DOCTYPE html>
<html lang="en">
<head> 
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Clickable Image with Instagram Logo</title>
<style>
    .container {
        position: relative;
        width: 100%;
        max-width: 500px; /* Adjust as needed */
    }
    .image {
        width: 50%;
        height: auto;
        
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        opacity: 0; 
        cursor: pointer;
    }
    .overlay:hover {
        opacity: 0.5; 
    }
    .instagram-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px; 
        height: auto;
        display: none; 
    }
    .overlay:hover .instagram-logo {
        display: block;
    }
</style>
</head>
<body>

<div class="container">
        <a href="https://www.instagram.com/umarylandigem/">
        <img class="image" src="Instagram_icon.png" width = "10" height = "5" alt="Instagram Icon">
           
        <div class="overlay">
        
            
        
</div>

</body>
</html>
