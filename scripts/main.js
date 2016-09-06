var app = angular.module('app', []);
app.directive('pieChart', function ($timeout) {
    return {
        restrict: 'EA',
        scope: {
            data: '=data'
        },
        link: function ($scope, $elm, $attr) {
            // Create the data table and instantiate the chart
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Label');
            data.addColumn('number', 'Value');
            var chart = new google.visualization.PieChart($elm[0]);
            draw();
            // Watches, to refresh the chart when its data, title or dimensions change
            $scope.$watch('data', function () {
                draw();
            }, true); // true is for deep object equality checking
            function draw() {
                if (!draw.triggered) {
                    draw.triggered = true;
                    $timeout(function () {
                        draw.triggered = false;
                        var label, value;
                        data.removeRows(0, data.getNumberOfRows());
                        angular.forEach($scope.data, function (row) {
                            label = row[0];
                            value = parseFloat(row[1], 10);
                            if (!isNaN(value)) {
                                data.addRow([row[0], value]);
                            }
                        });
                        chart.draw(data);
                    }, 0, true);
                }
            }
        }
    };
}).controller('MsgCtrl', ['$scope', function ($scope) {
    $scope.chartData = [
        ['Indutny', 43],
        ['ChALkeR', 34],
        ['kzc', 25]
    ];
    $scope.users = [
        {id: 1, name: 'Indutny', isChecked: false},
        {id: 2, name: 'ChALkeR', isChecked: false},
        {id: 3, name: 'kzc', isChecked: false}
    ];

    $scope.show = false;

    $scope.toggle = function() {
        $scope.show = true;
    }
    
     $scope.addMsg = function() {
          if(event.keyCode == 13 && $scope.message.text){
              $scope.conversation.push({text:$scope.message.text, authorName:$scope.message.username});
              $scope.message.text = '';
              $scope.message.username = '';
          }
      }
    $scope.conversation = [
        {
            messageId: 1,
            text: 'This looks close to #6456 and I thought it was just another case of that issue but @indutny mentioned that the errors are printed from others languages so #6456 alone shouldnt have caused this this is why I m opening a separate issue.',
            img: 'images/myAvatar.png',
            wordCount: 43,
            authorId: 1,
            authorName: 'Indutny'
        },
        {
            messageId: 2,
            text: 'So you re experiencing a dropped data to console with normal exiting JS? i.e. without calling process.exit()? If so thats a different issue to #6456. On which platform are you experiencing this issue?',
            img: 'images/myAvatar2.png',
            wordCount: 34,
            authorId: 2,
            authorName: 'ChALkeR'
        },
        {
            messageId: 3,
            text: 'That happens because of libc buffer size limit. In fact vfprintf returns -1.',
            img: 'images/myAvatar4.png',
            wordCount: 13,
            authorId: 3,
            authorName: 'kzc'
        },
        {
            messageId: 4,
            text: 'This looks close to #6456 and I thought it was just another case of that issue but @indutny mentioned that the errors are printed from others languages so #6456 alone shouldnt have caused this this is why I m opening a separate issue.',
            img: 'images/myAvatar.png',
            wordCount: 43,
            authorId: 1,
            authorName: 'Indutny'
        },
        {
            messageId: 5,
            text: 'So you re experiencing a dropped data to console with normal exiting JS? i.e. without calling process.exit()? If so thats a different issue to #6456. On which platform are you experiencing this issue?',
            img: 'images/myAvatar2.png',
            wordCount: 34,
            authorId: 2,
            authorName: 'ChALkeR'
        },
        {
            messageId: 6,
            text: 'That happens because of libc buffer size limit. In fact vfprintf returns -1.',
            img: 'images/myAvatar4.png',
            wordCount: 13,
            authorId: 3,
            authorName: 'kzc'
        },
        {
            messageId: 7,
            text: 'This looks close to #6456 and I thought it was just another case of that issue but @indutny mentioned that the errors are printed from others languages so #6456 alone shouldnt have caused this this is why I m opening a separate issue.',
            img: 'images/myAvatar.png',
            wordCount: 43,
            authorId: 1,
            authorName: 'Indutny'
        },
        {
            messageId: 8,
            text: 'So you re experiencing a dropped data to console with normal exiting JS? i.e. without calling process.exit()? If so thats a different issue to #6456. On which platform are you experiencing this issue?',
            img: 'images/myAvatar2.png',
            wordCount: 34,
            authorId: 2,
            authorName: 'ChALkeR'
        },
        {
            messageId: 9,
            text: 'That happens because of libc buffer size limit. In fact vfprintf returns -1.',
            img: 'images/myAvatar4.png',
            wordCount: 13,
            authorId: 3,
            authorName: 'kzc'
        }
    ];
}]);