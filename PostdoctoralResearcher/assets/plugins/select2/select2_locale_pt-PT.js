/**
 * Select2 Portuguese (Portugal) translation
 */
(function ($) {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches: function () { return "Nenhum resultado encontrado"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Introduza " + n + " car" + (n == 1 ? "أ،cter" : "acteres"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Apague " + n + " car" + (n == 1 ? "أ،cter" : "acteres"); },
        formatSelectionTooBig: function (limit) { return "Sأ³ أ© possأ­vel selecionar " + limit + " elemento" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "A carregar mais resultados..."; },
        formatSearching: function () { return "A pesquisar..."; }
    });
})(jQuery);
