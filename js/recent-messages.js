// Main js for Vue

'use strict';

var recentMessages = {
    messages: [
    {
      from: 'Google',
      subject: 'Data??',
      flagged: true,
      isRead: true
    },
    {
      from: 'Facebook',
      subject: 'Share those profiles??',
      flagged: false,
      isRead: false
    },
    {
      from: 'Sarah C.',
      subject: 'Some robot is following me?',
      flagged: false,
      isRead: true
    },
    {
      from: 'Donald. T',
      subject: 'Meeting to discuss border wall',
      flagged: true,
      isRead: true
    },
    {
      from: 'Sarah V.',
      subject: 'Lunch??',
      flagged: false,
      isRead: false
    },
    ]
  };


Vue.component('recent-messages', {
  template: `
              <table v-if="messages.length">
                <tr v-bind:class="{ read: message.isRead }" v-for="message in messages">
                  <td>From: {{ message.from }}</td>
                  <td>Subject: {{ message.subject }}</td>
                  <td v-if="message.flagged"><i class="fa fa-flag orange"></i></td>
                  <td v-else><i class="fa fa-flag grey"></i></td>
                </tr>
              </table>
            `,
  data: function() {
    return recentMessages;
  }
});

var book = new Vue({
  el: '#recentMessages'
});