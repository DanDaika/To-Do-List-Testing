var toDoListHomepage = require ('../pages/toDoListHomepage.js');
var tasksList = require ('../utils/helper.js');
var checkedTask = 'ng-scope completed';
var notCheckedTask = 'ng-scope';
var extraText = ', this text is added extra!';
var toDoListHomepageName = 'todos';
var empty = 0;

var url = 'http://todomvc.com/examples/angularjs/#/';
var urlActive = 'http://todomvc.com/examples/angularjs/#/active';
var urlCompleted = 'http://todomvc.com/examples/angularjs/#/completed';


describe ('Test Cases: ', () => {
    beforeAll( async () => {
        await toDoListHomepage.getUrl(url);
        expect(toDoListHomepage.getCurrentUrl()).toMatch(url,'[001] The loaded URL is wrong!');        
        expect(toDoListHomepage.getTodosPageName()).toEqual(toDoListHomepageName,'[002] The loaded page is wrong!');
    });
    beforeEach( async () => {
        await toDoListHomepage.addNewTask(tasksList.getTask(0));
        expect(toDoListHomepage.getLastEnteredTaskText()).toEqual(tasksList.getDisplayedTask(0),'[003] The displayed task is wrong!');

        await toDoListHomepage.clickAllView();
        expect(toDoListHomepage.getCurrentUrl()).toMatch(url,'[004] The loaded URL is wrong!');

        await toDoListHomepage.selectDeselectAll();
        expect(toDoListHomepage.getLastEnteredTaskStatus()).toEqual(checkedTask,'[005] The task is not checked!');

        await toDoListHomepage.clickClearCompleted();
        expect(toDoListHomepage.getNumberOfTasks()).toBe(empty,'[006] The to-do list is not empty!');
    });

    it ('Test Case 01 -> Create a to-do list with 4 tasks', async () => {

        await toDoListHomepage.addNewTask(tasksList.getTask(1));
        expect(toDoListHomepage.getLastEnteredTaskText()).toEqual(tasksList.getDisplayedTask(1),'[007] The displayed task is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[008] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[009] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[010] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[011] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[012] "Clear completed" button is displayed!');

        await toDoListHomepage.addNewTask(tasksList.getTask(2));
        toDoListHomepage.getNumberOfTasks().then ( (numberOfTasks) => {
        expect(toDoListHomepage.getDesiredTaskText(numberOfTasks-1)).toEqual(tasksList.getDisplayedTask(2),'[013] The displayed task is wrong!');
        });
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[014] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[015] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[016] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[017] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[018] "Clear completed" button is displayed!');

        await toDoListHomepage.clickDesiredTask(tasksList.getDisplayedTask(2));
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(2))).toEqual(checkedTask,'[019] The task is not checked!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[020] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[021] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[022] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[023] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[024] "Clear completed" button is not displayed!');

        await toDoListHomepage.clickActiveView();
        expect(toDoListHomepage.getCurrentUrl()).toMatch(urlActive,'[025] The loaded URL is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(1,'[026] The number of tasks is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(1),'[027] The displayed task is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[028] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[029] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[030] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[031] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[032] "Clear completed" button is not displayed!');

        await toDoListHomepage.clickCompletedView();
        expect(toDoListHomepage.getCurrentUrl()).toMatch(urlCompleted,'[033] The loaded URL is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(1,'[034] The number of tasks is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(2),'[035] The displayed task is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[036] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[037] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[038] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[039] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[040] "Clear completed" button is not displayed!');

        await toDoListHomepage.clickAllView();
        expect(toDoListHomepage.getCurrentUrl()).toMatch(url,'[041] The loaded URL is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(2,'[042] The number of tasks is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(1),'[043] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(2),'[044] The displayed task is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[045] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[046] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[047] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[048] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[049] "Clear completed" button is not displayed!');

        await toDoListHomepage.modifyExistingDesiredTask(tasksList.getDisplayedTask(1),extraText);
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(1)+extraText)).toEqual(notCheckedTask,'[050] The task is checked!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[051] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[052] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[053] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[054] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[055] "Clear completed" button is not displayed!');

        await toDoListHomepage.modifyExistingDesiredTask(tasksList.getDisplayedTask(2),extraText);
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(2)+extraText)).toEqual(checkedTask,'[056] The task is not checked!');
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(1)+extraText)).toEqual(notCheckedTask,'[057] The task is checked!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[058] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[059] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[060] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[061] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[062] "Clear completed" button is not displayed!');

        await toDoListHomepage.addNewTask(tasksList.getTask(3));
        expect(toDoListHomepage.getLastEnteredTaskText()).toEqual(tasksList.getDisplayedTask(3),'[063] The displayed task is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[064] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[065] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[066] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[067] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[068] "Clear completed" button is not displayed!');

        await toDoListHomepage.addNewTask(tasksList.getTask(4));
        expect(toDoListHomepage.getLastEnteredTaskText()).toEqual(tasksList.getDisplayedTask(4),'[069] The displayed task is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[070] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[071] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[072] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[073] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[074] "Clear completed" button is not displayed!');

        await toDoListHomepage.clickDesiredTask(tasksList.getDisplayedTask(4));
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(4))).toEqual(checkedTask,'[075] The task is not checked!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[076] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[077] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[078] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[079] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[080] "Clear completed" button is not displayed!');

        await toDoListHomepage.clickClearCompleted();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(2,'[081] The number of tasks is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(1)+extraText,'[082] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(3),'[083] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(1)+extraText)).toEqual(notCheckedTask,'[084] The task is checked!');
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(3))).toEqual(notCheckedTask,'[085] The task is checked!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[086] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[087] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[088] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[089] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[090] "Clear completed" button is displayed!');

        await toDoListHomepage.clickActiveView();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(2,'[091] The number of tasks is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(1)+extraText,'[092] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(3),'[09.] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(1)+extraText)).toEqual(notCheckedTask,'[094] The task is checked!');
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(3))).toEqual(notCheckedTask,'[095] The task is checked!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[096] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[097] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[098] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[099] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[100] "Clear completed" button is displayed!');

        await toDoListHomepage.clickCompletedView();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(empty,'[101] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[102] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[103] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[104] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[105] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[106] "Clear completed" button is displayed!');

        await toDoListHomepage.clickAllView();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(2,'[107] The number of tasks is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(1)+extraText,'[108] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(3),'[109] The displayed task is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[110] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[111] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[112] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[113] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[114] "Clear completed" button is displayed!');

        await toDoListHomepage.deletedesiredTask(tasksList.getDisplayedTask(1)+extraText);
        await toDoListHomepage.deletedesiredTask(tasksList.getDisplayedTask(3));
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(empty,'[115] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(false,'[116] "items left" are displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(false,'[117] "All" button is displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(false,'[118] "Active" button is displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(false,'[119] "Completed" button is displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[120] "Clear completed" button is displayed!');
    });


describe ('Test Case 02 -> ', () => {
    
    it ('Verify that all the characters can be entered as a task', async () => {

        await toDoListHomepage.addNewTask(tasksList.getTask(5));
        await toDoListHomepage.addNewTask(tasksList.getTask(6));
        await toDoListHomepage.addNewTask(tasksList.getTask(7));
        await toDoListHomepage.addNewTask(tasksList.getTask(8));
        await toDoListHomepage.addNewTask(tasksList.getTask(9));
        await toDoListHomepage.addNewTask(tasksList.getTask(10));
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(6,'[121] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[122] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[123] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[124] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[125] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[126] "Clear completed" button is displayed!');
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getTask(5),'[127] The displayed task is wrong!')
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getTask(6),'[128] The displayed task is wrong!')
        expect(toDoListHomepage.getDesiredTaskText(2)).toEqual(tasksList.getTask(7),'[129] The displayed task is wrong!')
        expect(toDoListHomepage.getDesiredTaskText(3)).toEqual(tasksList.getTask(8),'[130] The displayed task is wrong!')
        expect(toDoListHomepage.getDesiredTaskText(4)).toEqual(tasksList.getTask(9),'[131] The displayed task is wrong!')
        expect(toDoListHomepage.getDesiredTaskText(5)).toEqual(tasksList.getTask(10),'[132] The displayed task is wrong!')
    });
});


describe ('Test Case 03 -> ', () => {

    it ('Verify different kinds of combinations, regarding length and characters, entered as tasks', async () => {

        for (i=11;i<24;i++){
            await toDoListHomepage.addNewTask(tasksList.getTask(i));
        };
        
        for (i=0,j=11;j<24;i++,j++){
            expect(toDoListHomepage.getDesiredTaskText(i)).toEqual(tasksList.getDisplayedTask(j),'['+(i+133)+'] The displayed task is wrong!');
        };

        expect(toDoListHomepage.getNumberOfTasks()).toEqual(13,'[146] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[147] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[148] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[149] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[150] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[151] "Clear completed" button is displayed!');

    });
});

describe ('Test Case 04 -> ', () => {

    it ('Verify that the space character is ignored at the beginning and at the end of a task', async () => {
        await toDoListHomepage.addNewTask(tasksList.getTask(24));
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getTask(24),'[152] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(1,'[153] The number of tasks is wrong!');

        await toDoListHomepage.addNewTask(tasksList.getTask(25));
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getTask(24),'[154] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(1,'[155] The number of tasks is wrong!');

        await toDoListHomepage.addNewTask(tasksList.getTask(26));
        expect(toDoListHomepage.getDesiredTaskText(1)).not.toEqual(tasksList.getTask(26),'[156] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(2,'[157] The number of tasks is wrong!');
        expect(toDoListHomepage.getDesiredEditableTaskText(1)).toEqual(tasksList.getTask(26),'[158] The displayed task is wrong!');

        await toDoListHomepage.addNewTask(tasksList.getTask(27));
        expect(toDoListHomepage.getDesiredTaskText(2)).not.toEqual(tasksList.getTask(27),'[159] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(3,'[160] The number of tasks is wrong!');
        expect(toDoListHomepage.getDesiredEditableTaskText(2)).toEqual(tasksList.getTask(27),'[161] The displayed task is wrong!');

        await toDoListHomepage.addNewTask(tasksList.getTask(28));
        expect(toDoListHomepage.getDesiredTaskText(3)).not.toEqual(tasksList.getTask(28),'[162] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(4,'[163] The number of tasks is wrong!');
        expect(toDoListHomepage.getDesiredEditableTaskText(3)).toEqual(tasksList.getTask(28),'[164] The displayed task is wrong!');
    });
});

describe ('Test Case 05 -> ', () => {

    it ('Verify that the views are updated correctly', async () => {
        await toDoListHomepage.addNewTask(tasksList.getTask(29));
        await toDoListHomepage.addNewTask(tasksList.getTask(30));
        await toDoListHomepage.addNewTask(tasksList.getTask(31));
        await toDoListHomepage.addNewTask(tasksList.getTask(32));
        await toDoListHomepage.addNewTask(tasksList.getTask(33));
        await toDoListHomepage.addNewTask(tasksList.getTask(34));
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(6,'[165] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[166] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[167] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[168] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[169] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[170] "Clear completed" button is displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('6 items left','[171] The number of "items left" is wrong!');

        await toDoListHomepage.clickActiveView();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(6,'[172] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[173] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[174] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[175] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[176] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[177] "Clear completed" button is displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('6 items left','[178] The number of "items left" is wrong!');

        await toDoListHomepage.clickCompletedView();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(0,'[179] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[180] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[181] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[182] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[183] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[184] "Clear completed" button is displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('6 items left','[185] The number of "items left" is wrong!');

        await toDoListHomepage.clickAllView();
        await toDoListHomepage.clickDesiredTask(tasksList.getDisplayedTask(31));
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(31))).toEqual(checkedTask,'[186] The task is not checked!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(6,'[187] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[188] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[189] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[191] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[192] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[193] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('5 items left','[194] The number of "items left" is wrong!');

        await toDoListHomepage.clickActiveView();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(5,'[195] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[196] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[197] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[198] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[199] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[200] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('5 items left','[201] The number of "items left" is wrong!');

        await toDoListHomepage.clickCompletedView();
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(31),'[202] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(1,'[203] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[204] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[205] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[206] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[207] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[208] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('5 items left','[209] The number of "items left" is wrong!');

        await toDoListHomepage.clickClearCompleted();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(empty,'[210] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[211] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[212] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[213] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[214] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[215] "Clear completed" button is displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('5 items left','[216] The number of "items left" is wrong!');

        await toDoListHomepage.clickAllView();
        await toDoListHomepage.clickDesiredTask(tasksList.getDisplayedTask(30));
        await toDoListHomepage.clickDesiredTask(tasksList.getDisplayedTask(34));
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(30))).toEqual(checkedTask,'[217] The task is not checked!');
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(34))).toEqual(checkedTask,'[218] The task is not checked!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(5,'[219] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[220] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[221] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[222] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[223] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[224] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('3 items left','[225] The number of "items left" is wrong!');

        await toDoListHomepage.clickActiveView();
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(29),'[226] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(32),'[227] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(2)).toEqual(tasksList.getDisplayedTask(33),'[228] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(3,'[229] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[230] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[231] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[232] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[233] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[234] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('3 items left','[235] The number of "items left" is wrong!');

        await toDoListHomepage.clickCompletedView();
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(30),'[236] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(34),'[237] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(2,'[238] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[239] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[240] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[241] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[242] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[243] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('3 items left','[244] The number of "items left" is wrong!');

        await toDoListHomepage.clickAllView();
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(30))).toEqual(checkedTask,'[245] The task is not checked!');
        expect(toDoListHomepage.getDesiredTaskStatus(tasksList.getDisplayedTask(34))).toEqual(checkedTask,'[246] The task is not checked!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(5,'[247] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[248] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[249] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[250] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[251] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[252] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('3 items left','[253] The number of "items left" is wrong!');

        await toDoListHomepage.clickClearCompleted();
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(29),'[254] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(32),'[255] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(2)).toEqual(tasksList.getDisplayedTask(33),'[256] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(3,'[257] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[258] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[259] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[260] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[261] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[262] "Clear completed" button is displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('3 items left','[263] The number of "items left" is wrong!');

        await toDoListHomepage.clickActiveView();
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(29),'[264] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(32),'[265] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(2)).toEqual(tasksList.getDisplayedTask(33),'[266] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(3,'[267] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[268] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[269] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[270] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[271] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[272] "Clear completed" button is displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('3 items left','[273] The number of "items left" is wrong!');

        await toDoListHomepage.clickCompletedView();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(empty,'[274] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[275] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[276] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[277] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[278] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[279] "Clear completed" button is displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('3 items left','[280] The number of "items left" is wrong!');

        await toDoListHomepage.clickActiveView();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(3,'[281] The number of tasks is wrong!');
        await toDoListHomepage.clickDesiredTask(tasksList.getDisplayedTask(29));
        await toDoListHomepage.clickDesiredTask(tasksList.getDisplayedTask(32));
        await toDoListHomepage.clickDesiredTask(tasksList.getDisplayedTask(33));
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(empty,'[282] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[283] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[284] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[285] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[286] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[287] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('0 items left','[288] The number of "items left" is wrong!');

        await toDoListHomepage.clickCompletedView();
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(29),'[289] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(32),'[290] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(2)).toEqual(tasksList.getDisplayedTask(33),'[291] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(3,'[292] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[293] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[294] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[295] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[296] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[297] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('0 items left','[298] The number of "items left" is wrong!');

        await toDoListHomepage.addNewTask(tasksList.getTask(35));
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(29),'[299] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(32),'[300] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(2)).toEqual(tasksList.getDisplayedTask(33),'[301] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(3,'[302] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[303] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[304] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[305] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[306] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[307] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('1 item left','[308] The number of "items left" is wrong!');

        await toDoListHomepage.clickActiveView();
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(35),'[309] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(1,'[302] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[303] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[304] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[305] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[306] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[307] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('1 item left','[308] The number of "items left" is wrong!');

        await toDoListHomepage.clickAllView();
        expect(toDoListHomepage.getDesiredTaskText(0)).toEqual(tasksList.getDisplayedTask(29),'[309] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(1)).toEqual(tasksList.getDisplayedTask(32),'[310] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(2)).toEqual(tasksList.getDisplayedTask(33),'[311] The displayed task is wrong!');
        expect(toDoListHomepage.getDesiredTaskText(3)).toEqual(tasksList.getDisplayedTask(35),'[312] The displayed task is wrong!');
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(4,'[313] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[314] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[315] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[316] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[317] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[318] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('1 item left','[319] The number of "items left" is wrong!');

        await toDoListHomepage.clickDesiredTask(tasksList.getDisplayedTask(35));
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(4,'[320] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(true,'[321] "items left" are not displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(true,'[322] "All" button is not displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(true,'[323] "Active" button is not displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(true,'[324] "Completed" button is not displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(true,'[325] "Clear completed" button is not displayed!');
        expect(toDoListHomepage.getNumberOfItemsLeft()).toEqual('0 items left','[326] The number of "items left" is wrong!');

        await toDoListHomepage.clickClearCompleted();
        expect(toDoListHomepage.getNumberOfTasks()).toEqual(empty,'[327] The number of tasks is wrong!');
        expect(toDoListHomepage.checkItemsLeftDisplayStatus()).toBe(false,'[328] "items left" are displayed!');
        expect(toDoListHomepage.checkAllViewDisplayStatus()).toBe(false,'[329] "All" button is displayed!');
        expect(toDoListHomepage.checkActiveViewDisplayStatus()).toBe(false,'[330] "Active" button is displayed!');
        expect(toDoListHomepage.checkCompletedViewDisplayStatus()).toBe(false,'[331] "Completed" button is displayed!');
        expect(toDoListHomepage.checkClearCompletedDisplayStatus()).toBe(false,'[332] "Clear completed" button is displayed!');


    });
});

});
