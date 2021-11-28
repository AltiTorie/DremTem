export default {
  definedCharts: [
    {
      id: '5',
      type: 'TemperatureHumidity',
      required_types: ['humid', 'temp'],
      chart_component: 'TemperatureHumidityDashboardComponent',
    },
    {
      id: '6',
      type: 'MoistureLight',
      required_types: ['moist', 'light'],
      chart_component: 'MoistureLightDashboardComponent',
    },
  ],
};
