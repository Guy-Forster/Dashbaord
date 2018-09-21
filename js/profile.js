// PROFILE COMPONENT

'use strict';

var profile = {
    fname: 'Claritive',
    sname: 'Analytics',
    status: false,
    image: 'img/svg/company-logo.svg'
}


Vue.component('profile', {
  template: `<div class="profile-container">
              <div class="img-container">
                <img v-bind:src="image">
              </div>
              <h2>{{ fname }} {{ sname }}</h2>
              <div class="user-status">
                <i v-bind:class="{ active: status }"></i>
                <p v-if="status">ACTIVE</p>
                <p v-else>OFFLINE</p>
              </div>
              <div class="profile-links">
                  <ul>
                    <li><a href="#" class="btn"><i class="fa fa-pencil"></i></a></li>
                    <li><a href="#" class="btn"><i class="fa fa-lightbulb-o"></i></a></li>
                    <li><a href="#" class="btn"><i class="fa fa-calendar"></i></a></li>
                    <li><a href="#" class="btn"><i class="fa fa-envelope"></i></a></li>
                  </ul>
              </div>
            </div>
            `,
  data: function() {
    return profile;
  }
})

var profile = new Vue({
  el: '#profile'
})