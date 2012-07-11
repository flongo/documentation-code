Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Template",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.template.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});