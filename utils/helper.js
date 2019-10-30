var Tasks = function() {

this.getTask = (taskNumber) => {
    return tasks[taskNumber].trim();
};

this.getDisplayedTask = (taskNumber) => {
    return tasks[taskNumber].replace(/\s{2,}/g,' ').trim(); //Regex to remove all whitescape except one between words
};

var tasks = ['Clear',                                                                   //task id 0
'Pick the kids from swimming lessons',                                                  //task id 1
'Get milk',                                                                             //task id 2
'Wash myself',                                                                          //task id 3    
'Sell drugs',                                                                           //task id 4
'☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !”#$%&’()*+,-./012',                                   //task id 5
'3456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abbcd',                                  //task id 6
'efghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòû',                                   //task id 7
'ùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚',                                   //task id 8
'╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·',                                   //task id 9
'√ⁿ²■',                                                                                 //task id 10
'0',                                                                                    //task id 11
'1',                                                                                    //task id 12
'a',                                                                                    //task id 13
'B',                                                                                    //task id 14
'!Casket',                                                                              //task id 15
'"suppe',                                                                               //task id 16
'wer123',                                                                               //task id 17
'098op098op098op098op098op098op098op098op098op098op098op098op098op098op098op09op098op', //task id 18
'Part: 546gbfcve',                                                                      //task id 19
'-12',                                                                                  //task id 20
'-asdWENCV',                                                                            //task id 21
'-OZXY,',                                                                               //task id 22
'=321as',                                                                               //task id 23
'Cats',                                                                                 //task id 24
'    ',                                                                                 //task id 25
'  dog   food',                                                                         //task id 26
'my  SOCKS   ',                                                                         //task id 27
'WhItE     wHaLe',                                                                      //task id 28
'cats',                                                                                 //task id 29
'Dogs',                                                                                 //task id 30
'1234',                                                                                 //task id 31
'wrertrwrterrydsvadvasdaysdywggvsvaudsaudysyuaduwudvdc c c',                            //task id 32
'-765',                                                                                 //task id 33
'This IS a random tEXt',                                                                //task id 34
'Cactussssssssssssssss',                                                                //task id 35
'1234555',                                                                              //task id 36
'000000000000000000001',                                                                //task id 37
'Water is too cold',                                                                    //task id 38
'WREWTIREGOFIFSOGIFGORITOETIROETIORETI',                                                //task id 39
'dsnadjaskfjafjsahfjafjasfka][][][][]0))())21241430?"""">}}">',                         //task id 40
'now',                                                                                  //task id 41
'then',                                                                                 //task id 42
'milk',                                                                                 //task id 43
'get some vodka',                                                                       //task id 44
'put the dog to sleep',                                                                 //task id 45
'Cactussssssssssssssss',                                                                //task id 35
'Cactussssssssssssssss',                                                                //task id 35
'Cactussssssssssssssss',                                                                //task id 35
'Cactussssssssssssssss',                                                                //task id 35
'Cactussssssssssssssss'                                                                 //task id 35

];                                                                                         

};
module.exports = new Tasks();
