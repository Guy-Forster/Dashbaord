// TODO COMPONENT

'use strict';

var taskdata = {
  title: 'todo list',
  tasks: [
    {
      pname: 'Project X',
      tname: 'New Nike Running Shoes Campaign',
      taskdesc: 'Schedule planning meeting with art team',
      descriptions: [
        {
          description: 'Schedule planning meeting with art team',
          description: 'Confirm client requirements',
          description: 'Find printers'
        },
      ]
    },
  ]
}

Vue.component('todo', {
  template: `
              <div class="todo-container">
                <h3>{{ title }}</h3>
                <div class="todo-body" v-for="task in tasks">
                  <h4>
                    <span class="pname">{{ task.pname }}</span>
                    <span class="tname">{{ task.tname }}</span>
                    <a href="#" class="expand"><i class="fa fa-chevron-down"></i></a>
                  </h4>
                  <table class="hidden">
                    <tr>
                      <th>Number</th>
                      <th>Description</th>
                    </tr>
                    <tr v-for="(task, index) in tasks">
                      <td>{{ index }}</td>
                      <td>{{ task.taskdesc }}</td>
                    </tr>
                  </table>
                </div>
              </div>
            `,
  data: function() {
    return taskdata;
  }
})

var todo = new Vue({
  el: '#todo'
})









  