//your JS code here. If required.
function removeSelectedColor(){
	const colorSelect = document.getElementById("colorSelect");
	colorSelect.remove(colorSelect.selectedIndex);
}
// Attach the function to the button
document.querySelector('input[type="button"]').addEventListener("click", 
													removeSelectedColor);