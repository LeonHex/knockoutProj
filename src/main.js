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
    console.log(viewModel.list()[0].name.firstName());
    ko.applyBindings(viewModel, tempNode);
};

var modifyList = function () {
    console.log("modify list element======================");
    vmOrigin.list[0].name.firstName = '11';
    // viewModel.list()[0].name(11);
    // ko.mapping.fromJS(vmOrigin, viewModel);
    var tempArr = ko.mapping.fromJS(vmOrigin.list);
    // viewModel.list([]);
//     viewModel.list = tempArr;
//     var a = tempArr();
//     tempArr([]);
//     tempArr(a);
    // viewModel.list(viewModel.list);
    viewModel.list(tempArr());
    // viewModel.list.replace(tempArr);
    console.log(viewModel.list()[0].name.firstName());
}