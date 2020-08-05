import Vue from 'vue'
import ECharts from 'vue-echarts'
<% if (!options.addModulesManually) { %>
import 'echarts'<% } -%>
<% if (options.addGL) { %>
import 'echarts-gl'<% } -%>
<% if (options.addModulesManually) { %>
<% options.addedModules.forEach(function(module) { %>
import '<%- `echarts/lib/${module}` %>'<% }) %>
<% } -%>

Vue.use(ECharts)

// register component to use
Vue.component('v-chart', ECharts)
