// DATA_TEMPLATE: empty_table
oTest.fnStart( "oLanguage.sUrl" );

/* Note that we only test the internal storage of language information pulled form a file here
 * as the other language tests will check it goes into the DOM correctly
 */

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
		"aoColumns": [
			{ "mData": "engine" },
			{ "mData": "browser" },
			{ "mData": "platform" },
			{ "mData": "version" },
			{ "mData": "grade" }
		]
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnTest( 
		"sUrl is blank by default",
		null,
		function () { return oSettings.oLanguage.sUrl == ""; }
	);
	
	
	oTest.fnWaitTest( 
		"Loading of German file loads language information",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumnDefs": [
					{ "mData": "engine", "aTargets": [0] },
					{ "mData": "browser", "aTargets": [1] },
					{ "mData": "platform", "aTargets": [2] },
					{ "mData": "version", "aTargets": [3] },
					{ "mData": "grade", "aTargets": [4] }
				],
				"oLanguage": {
					"sUrl": "../../../examples/examples_support/de_DE.txt"
				}
			} );
			oSettings = oTable.fnSettings();
		},
		function () {
			var bReturn = 
				oSettings.oLanguage.sProcessing == "Bitte warten..." &&
				oSettings.oLanguage.sLengthMenu == "_MENU_ Eintrأ¤ge anzeigen" &&
				oSettings.oLanguage.sZeroRecords == "Keine Eintrأ¤ge vorhanden." &&
				oSettings.oLanguage.sInfo == "_START_ bis _END_ von _TOTAL_ Eintrأ¤gen" &&
				oSettings.oLanguage.sInfoEmpty == "0 bis 0 von 0 Eintrأ¤gen" &&
				oSettings.oLanguage.sInfoFiltered == "(gefiltert von _MAX_  Eintrأ¤gen)" &&
				oSettings.oLanguage.sInfoPostFix == "" &&
				oSettings.oLanguage.sSearch == "Suchen" &&
				oSettings.oLanguage.oPaginate.sFirst == "Erster" &&
				oSettings.oLanguage.oPaginate.sPrevious == "Zurأ¼ck" &&
				oSettings.oLanguage.oPaginate.sNext == "Nأ¤chster" &&
				oSettings.oLanguage.oPaginate.sLast == "Letzter";
				
			return bReturn;
		}
	);
	
	/* One DOM check just to ensure that they go into the DOM */
	oTest.fnTest(
		"Loaded language goes into the DOM",
		null,
		function () { return document.getElementById('example_info').innerHTML = "1 bis 10 von 57 Eintrأ¤gen"; }
	);
	
	
	oTest.fnComplete();
} );