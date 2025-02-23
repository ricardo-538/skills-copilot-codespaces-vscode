function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'app/views/skills-member.html',
        controller: 'skillsMemberCtrl',
        constrollerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}