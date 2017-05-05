var viewModel, vmOrigin;

window.onload = function () {
    console.log("knockout test begin=====================");
    vmOrigin = {
        type: "knockout-test-root",
        obj: {
            inner: {
                core: 1
            }
        },
        list: [
            {
                name: {
                    firstName: 'Li1',
                    lastName: 'Nan'
                },
                age: 18
            }
            , {
                name: {
                    firstName: 'Li2',
                    lastName: 'Nan'
                },
                age: 19
            }
            , {
                name: {
                    firstName: 'Li3',
                    lastName: 'Nan'
                },
                age: 20
            }
            , {
                name: {
                    firstName: 'Li4',
                    lastName: 'Nan'
                },
                age: 21
            }
            , {
                name: {
                    firstName: 'Li5',
                    lastName: 'Nan'
                },
                age: 22
            }
            , {
                name: {
                    firstName: 'Li6',
                    lastName: 'Nan'
                },
                age: 23
            }
        ]
    }
    viewModel = ko.mapping.fromJS(vmOrigin);
    var tempNode = document.getElementById("view");
    ko.applyBindings(viewModel, tempNode);
};

var modifyList = function () {
    console.log("modify list element======================");
    // vmOrigin.list[0].name = '11';
    // viewModel.list()[0].name(11);
    console.info(viewModel.obj);
    // ko.mapping.fromJS(vmOrigin, viewModel);
}