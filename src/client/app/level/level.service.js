(function() {
    'use strict';

    angular
        .module('app.level')
        .service('levelService', levelService);

    levelService.$inject = ['enemyService'];

    /* @ngInject */
    function levelService(enemyService) {
        this.mainMessage = '';
        this.Level = function() {
            this.checkLength = function() {
                console.log(this.ascii[0].length);
            },
            this.spawnMore = true;
        };

        //treeone
        this.treeOne = new this.Level();
        this.treeOne.spawnMore = false;
        this.treeOne.enemySpawn = [141, 21];
        this.treeOne.playerSpawn = [0, 22];
        this.treeOne.enemyArray = [enemyService.Tree];
        this.treeOne.ascii = ["      .'           './   \\    .'\\      /                            /                                                                                                ",
                              "    /               \\    \\ .'   \\    /                            /                                                                                                  ",
                              "  .'                      /      '../               //\\\\        .'                                                                                                   ",
                              " /                 .     /         /               ///\\\\\\    . /                                                                                                     ",
                              "/      ^           T    /                        /////\\\\\\\\   T       ^                                                                                               ",
                              "   ^   T    .    ^               .       ^      //////\\\\\\\\\\      .   T                                                                                               ",
                              "   T        T    T     ^     .   T       T  //////////\\\\\\\\\\\\\\\\\\  T            ^                                                                                      ",
                              "     / \\              / \\   / \\     / \\       /// -- /\\ -- \\\\\\                T                                                                                      ",
                              ".     |      / \\       |     |       |    ////////////\\\\\\\\\\\\\\\\\\\\\\     / \\                                                                                            ",
                              " \\            |             ^     .       ////////////\\\\\\\\\\\\\\\\\\\\\\\   . |    ^                                                                                        ",
                              " \\    / \\                  / \\   / \\        //////////\\\\\\\\\\\\\\\\\\\\    / \\    / \\                                                                                       ",
                              "| .   / \\  / \\   / \\      . |    / \\      //////////    \\\\\\\\\\\\\\\\\\    |      |                                                                                        ",
                              " / \\   |    |    / \\     / \\      |     //////// |        | \\\\\\\\\\\\\\\\ .      .                                                                                        ",
                              " /\ \   .          |     /   \\                   ,|   __   |.        / \\    / \\                                                                                       ",
                              "  |   / \\         .     /   \\      .        __.'_|  /__\\. | \\__     / \\    / \\                                                                                       ",
                              "^     / \\        / \\      |       / \\     ,'__.'.  \\ \\ / \\|__  \\,.   |    . |                                                                                        ",
                              " \\     |    /\\   / \\   .          / \\    .     / \\ / / / \\   \\___ \\      / \                                                                                         ",
                              " \\    ^    /  \\   |   / \\          |    / \\    / \\ \\/   |     ^  \\/      / \                                                                                         ",
                              "|    / \\   /  \\  .    / \\      ^        / \\     |            / \\      .   |  .^.                     .                                       ^                       ",
                              "     / \\    ||  / \\    |      / \\        |           .       / \\     / \\    /   \\                   / \\                                     / \                      ",
                              "      |         / \\          /   \\                  / \\       |     /   \\   /   \\                   / \\                                     / \                      ",
                              "                / \\          /   \\                  / \\             /   \\     |             _________|___________         --------------  ___|_                      ",
                              "_________________|_____________|_____________________|________________|___________----------------------------------------              ----------                   ",
                              "------------------------------------------------------------------------------------                                                              -------------------"];
        // this.treeOne.ascil = ["                                    ",
        //                       "------------------------------------"];

        this.treeOne.spawnAtStart = [[17, 22], [31, 22], [53, 22], [70, 22], [101, 21], [141, 21]];



        //treetwo
        this.treeTwo = new this.Level();
        this.treeTwo.enemyArray = [enemyService.TreeWarrior];
        this.treeTwo.playerSpawn = [0, 21];
        this.treeTwo.ascii = ["       /         \\   .^.               .'                               //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  ",    
                              "     .'           './   \\    .'\\      /                            ///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",      
                              "    /               \\    \\ .'   \\    /                            /////////////////////////     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",            
                              "  .'                      /      '../                       /////////////////////////////          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",     
                              " /                 .     /         /                    ///////////////////////////////              \\\\\\\\\\\\\\\\\\\\\\\\\\\\",
                              "/                  T    /                                                        |            |           |        ",
                              "   ^        .    ^               .                                               |            |           |        ",
                              "   T  .     T    T           .   T                   .                        ^  |                        |        ",
                              "     / \\      .             / \\            .        / \\     .          .      T .'   |             |      '.       ",
                              ".     |      / \\      .      |         .  / \\       / \\    / \\        / \\       |    |             |       |       ",
                              " \\     .      |      / \\    ^     .   / \\  |         |     / \\       . |    ^   |                          |       ",
                              " \\    / \\         ^  / \\  ./ \\   / \\  / \\        .          |       / \\    / \\  |           |              |       ",
                              "| .   / \\     ^  / \\  |  / \\|    / \\   |   .    / \\                  |      |   |                          |       ",
                              " / \\   |  .  / \\ / \\   . / \\   .  |   .   / \\   / \\     ^            .      .  .'                          '.      ",
                              " / \\   .  / \\/ \\  |   / \\ |   / \\    / \\  / \\    |     / \\          / \\    / \\ |        |               |   |      ",
                              "  |   / \\ / \\ |   .   / \\  .  / \\  . / \\   |           / \\          / \\    / \\ |        |               |   |      ",
                              "^     / \\  |     / \\   |  / \\  |  / \\ |          ^      |            |      ,..|                 |      |   |      ",
                              " \\     |    /\\   / \\   .  / \\  .  / \\    .      / \\          ^         ___.'   |                 |          |      ",
                              " \\         /  \\   |   / \\  |  / \\  |    / \\    /   \\        / \\ _____.'       .'   |      ________          '.     ",
                              "|          /  \\       / \\     / \\       / \\    /   \\        / \\ '.____.,'--__.|    |     /        \\          |'.   ",
                              "            ||         |       |         |       |           |                |          |        |          |  \\  ",
                              "                                                                                           _______/           |   '",
                              "_________________________________________________________________________________________.'                        ",
                              "-------------------------------------------------------------------------------------------------------------------"];
        


        this.bridge = new this.Level();
        this.bridge.enemyArray = [enemyService.TreeWarrior];
        this.bridge.playerSpawn = [0, 15];
        this.bridge.enemySpawn = [150, 15];
        this.bridge.ascii =  ["--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
                              "  / \\    / \\                          .           /                                                             _'                                                                         .........                            ",                                                                                                                                                                                                                  
                              "  / \\     |         .                / \\         /                                               ~~~           / \\_                                                                    ..''         ''..                        ",
                              "   |               / \\       .       / \\        /                     ~~                                      /    \\  /                      |-                                                                                 ",
                              "           .       / \\      / \\       |        /      ~~~                                                   .'     /\\/                      -|                                                                                  ",
                              "          / \\       |       / \\               /                                                           .'      /  \\                       |                    -|                                              -|            ",
                              "          / \\                |    ^          /                                    ~~~                    /        \\  /                                             |-                                              |-           ",
                              "    .      |                     / \\       .'                                                           /         /\\                                               |                                               |            ",                                     
                              "   / \\                 .         / \\      /                                                           .'         /  \\/                 ,......                                            -|                                    ",
                              "   / \\                / \\         |      /                                                           /              /              .'''       ''...                                        |-                                   ",
                              "    |         ^       / \\               /                                                           /                                                                                      |                                    ",
                              "             / \\       |  .           .'                      ~~~                                 .'                                          |-                                                                                ",
                              "   /\\        / \\         / \\         /                                                           /                                           -|                                                                                 ",
                              "  /  \\        |         /   \\       /                                                           /                                             |                                                                                 ",
                              "  /  \\                  /   \\      /                                               ~~~         /                                                                                                       _________________        ",
                              "   ||                     |       /                                                          _/      ,..'''''''''''''____                                         ......................''''''''''''''''''.................''__  ",                                                            
                              "                                .'          ~~~~                                           .'     ,.'                '''''''''''''''''''''''''''''''''''''''''''''                                                         ''''''",                                                                                                                                                                                                                                                                 
                              "'''''''____                   _________________________________________________________________,.'                                                                                                                              ",                                                                                
                              "       ''''''''''''''''''''''/   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   / /                                                    |-                                                                          ",
                              "  .                         /-----------------------------------------------------------------/                                -|                  -|                           -|                                              ",
                              " / \\        .             .'         //\\\\                // \\\\                 //\\\\          /                                  |-                  |                            |-                              |-             ",
                              " / \\       / \\          .'                                                                 .'                                   |                                                |                              -|              ",
                              "  |        / \\         /                       ~~                                         /            |-                                                                                                        |              ",
                              "            |         /                                          ~~~~                   .'             |                                                                                                                        ",
                              "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"];


        this.levelDictionary = [];
        this.levelDictionary['treeOne'] = this.treeOne;
        this.levelDictionary['treeTwo'] = this.treetwo;
        this.levelDictionary['bridge']  = this.bridge;



    }
})();