function reloadBtn() {
	setTimeout(function () {
		window.location.reload();
	}, 1500);
	var btn = document.getElementById("reload");
	btn.className = "loading";
	btn.innerHTML = "<i class='fa fa-redo-alt spinning'></i> refreshing";
}
