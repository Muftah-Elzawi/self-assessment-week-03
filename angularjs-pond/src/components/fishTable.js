angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repeat="fish in $ctrl.fishes track by $index"  fish = $ctrl.fish></
    </div>`
});

<div ng-repeat="(key, value) in myObj"> ... </div>