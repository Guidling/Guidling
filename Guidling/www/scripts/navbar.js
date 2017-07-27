//Navbar, header und footer bleiben besten, selbst wenn eine neue Seite geladen wird
//theoretisch wird nur die Navbar von index.html verwendet, zum sichergehen steht sie aber auch bei den anderen Seiten, wird aber nicht initialisiert
$(function () {
    $("[data-role='navbar']").navbar();
    $("[data-role='header'], [data-role='footer']").toolbar();
});
// Update wenn eine neue Seite geladen wird
$(document).on("pagecontainerchange", function () {
    // wenn der data-title gleich wie der Navbar-Button heißt, setze ihn auf aktiv.
    // erforderlicher Syntax: <div data-role="page" data-title="Info">
    // current = neu geladener page data-title
    var current = $(".ui-page-active").jqmData("title");
    // <h1> im header ändern
    $("[data-role='header'] h1").text(current);
    // Den alten aktiven Button zurücksetzen
    $("[data-role='navbar'] a.ui-btn-active").removeClass("ui-btn-active");
    // Den neuen aktiven Button festlegen
    $("[data-role='navbar'] a").each(function () {
        if ($(this).text() === current) {
            $(this).addClass("ui-btn-active");
        }
    });
});