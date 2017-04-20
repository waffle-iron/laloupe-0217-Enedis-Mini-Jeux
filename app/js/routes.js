angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }

            })
            .state('anon.login', {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'anon/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('anon.games', {
                abstract: true,
                url: '/games',
                views: {
                    'content@': {
                        templateUrl: 'anon/game.html',
                        controller: 'GameController'
                    }
                },
            })
            .state('anon.games.charabia', {
              url: '/charabia',
              views: {
                'game': {
                  templateUrl: 'anon/games/charabia.html',
                  controller: 'CharabiaController'
                }
              }

            })
            .state('anon.games.boucheTrou', {
                url: '/bouche-trou',
                views: {
                    'game': {
                        templateUrl: 'anon/games/bouche-trou.html',
                        controller: 'BoucheTrouController'
                    }
                },
              })
              .state('anon.games.miroir', {
                  url: '/miroir',
                  views: {
                      'game': {
                          templateUrl: 'anon/games/miroir.html',
                          controller: 'miroirController'
                      }
                  },
                })
            .state('anon.games.vraiOuFaux', {
              url: '/vrai_ou_faux',
              views: {
                  'game': {
                      templateUrl: 'anon/games/vrai_ou_faux.html',
                      controller: 'VraiOuFauxController'
                  }
              }

          });

        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                views: {
                    'navbar@': {
                        templateUrl: 'user/navbar.html',
                        controller: 'NavbarController'
                    }
                },
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.dashboard', {
                url: '/dashboard',
                views: {
                    'content@': {
                        templateUrl: 'user/dashboard.html',
                        controller: 'DashboardController'
                    }
                }
            })
            .state('user.profile', {
                url: '/profile',
                views: {
                    'content@': {
                        templateUrl: 'user/profile.html',
                        controller: 'ProfileController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
