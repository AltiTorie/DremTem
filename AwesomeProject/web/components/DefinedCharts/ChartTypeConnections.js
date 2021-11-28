import TemperatureHumidityDashboardComponent from './TemperatureHumidityDashboardComponent';
import MoistureLightDashboardComponent from './MoistureLightDashboardComponent';
import TemperatureDashboardComponent from './BasicTypesDashboards/TemperatureDashboardComponent';
import HumidityDashboardComponent from './BasicTypesDashboards/HumidityDashboardComponent';
import MoistureDashboardComponent from './BasicTypesDashboards/MoistureDashboardComponent';
import LightDashboardComponent from './BasicTypesDashboards/LightDashboardComponent';
import DefaultDashboardComponent from './DefaultDashboardComponent';
export default {
  componentConnections: {
    TemperatureHumidityDashboardComponent:
      TemperatureHumidityDashboardComponent,
    MoistureLightDashboardComponent: MoistureLightDashboardComponent,
    TemperatureDashboardComponent: TemperatureDashboardComponent,
    HumidityDashboardComponent: HumidityDashboardComponent,

    MoistureDashboardComponent: MoistureDashboardComponent,
    LightDashboardComponent: LightDashboardComponent,
    DefaultDashboardComponent: DefaultDashboardComponent,
  },
  definedComplexCharts: [
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
  definedSimpleCharts: [
    {
      id: '1',
      type: 'Temperature',
      required_types: ['temp'],
      chart_component: 'TemperatureDashboardComponent',
    },
    {
      id: '2',
      type: 'Humidity',
      required_types: ['humid'],
      chart_component: 'HumidityDashboardComponent',
    },
    {
      id: '3',
      type: 'Moisture',
      required_types: ['moist'],
      chart_component: 'MoistureDashboardComponent',
    },
    {
      id: '4',
      type: 'Light',
      required_types: ['light'],
      chart_component: 'LightDashboardComponent',
    },
  ],
};
