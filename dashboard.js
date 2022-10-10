var progress = 0;
for(var i = 1; i <= 18; i++) {
    progress += parseFloat(document.getElementById(i).innerHTML);
}
progress = progress / 60 * 100;
document.getElementById("bar-filler").style.width = `${progress.toFixed(2)}%`;
console.log(progress);