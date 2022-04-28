function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = ;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    // but you can adapt to make it append to the element you want.
    document.body.appendChild(img);
}