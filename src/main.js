window.onload = function () {
    console.log("knockout test begin=====================");
    var viewModel = {
        type: "knockout-test-root",
        list: [
            {
                name: '1',
                age: 18
            }
            , {
                name: '2',
                age: 19
            }
            , {
                name: '3',
                age: 20
            }
            , {
                name: '4',
                age: 21
            }
            , {
                name: '5',
                age: 22
            }
            , {
                name: '6',
                age: 23
            }
        ]
    }
    var tempNode = document.getElementById("view");
    ko.applyBindings(viewModel, tempNode);
};