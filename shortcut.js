// Get all the thumbnails
let boxes = document.getElementsByClassName("box");

for (let box of boxes) {
  let filename = box.innerText.trim();

  if (filename.includes(".ORF")) {
    // Create a button element for each "box"
    let downloadButton = document.createElement("a");
    
    // Set up the button for each RAW thumbnail, point it to the RAW file (clicking will trigger a download)
    downloadButton.target = "_blank";
    downloadButton.href = `/DCIM/100OLYMP/${filename}`;
    
    // Style the button
    downloadButton.innerHTML = "Download";
    downloadButton.style.fontSize = "large";
    
    // Add the button to the "box"
    box.appendChild(downloadButton);
  } else {
    // Make all non .ORF file thumbnails disappear
    box.style.display = "none";
  }
}

// Required by Apple Shortcuts
completion();
