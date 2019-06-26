function reloadBtn() {
	setTimeout(function () {
		window.location.reload();
	}, 1500);
	var btn = document.getElementById("reloadIcon");
	btn.className = "fa fa-redo-alt spinning";
}
