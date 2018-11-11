COBI.init('token');

// Make clock appear in upper right corner
COBI.app.clockVisible.write(false);
// Also listen to standard controller events
COBI.devkit.overrideThumbControllerMapping.write(true);

// Disable Reordering in Experience
var inEditMode = (COBI.parameters.context() == COBI.context.offRideSettings || COBI.parameters.context() == COBI.context.onRideSettings);

// Allow user to zoom in and out
COBI.hub.externalInterfaceAction.subscribe(function (action) {
    // Listen to inputs and update zoom index variable
    if ((action == 'UP' || action == 'RIGHT')) {
        zoomIn();
    }
    if ((action == 'DOWN' || action == 'LEFT')) {
        zoomOut();
    }
});

// Display detailled item names if touch interaction is allowed
COBI.app.touchInteractionEnabled.subscribe(function (touchInteractionEnabled) {
    updateInterfaceVisibility(touchInteractionEnabled);
});

// Define id, name, events, formatting functions, units and default value for each item
var definitions = [
    {
        id: 'speed',
        name: i18next.t('speed'),
        subscribe: COBI.rideService.speed.subscribe,
        unsubscribe: COBI.rideService.speed.unsubscribe,
        formatter: formatSpeedDot1,
        unit: 'km/h',
        defaultValue: '-'
    },
    {
        id: 'average_speed',
        name: i18next.t('average_speed'),
        subscribe: COBI.tourService.averageSpeed.subscribe,
        unsubscribe: COBI.tourService.averageSpeed.unsubscribe,
        formatter: formatSpeedDot1,
        unit: 'Ø km/h',
        defaultValue: '-'
    },
    {
        id: 'user_power',
        name: i18next.t('user_power'),
        subscribe: COBI.rideService.userPower.subscribe,
        unsubscribe: COBI.rideService.userPower.unsubscribe,
        formatter: formatInt,
        unit: 'watts',
        defaultValue: '-'
    },
    {
        id: 'cadence',
        name: i18next.t('cadence'),
        subscribe: COBI.rideService.cadence.subscribe,
        unsubscribe: COBI.rideService.cadence.unsubscribe,
        formatter: formatInt,
        unit: 'rpm',
        defaultValue: '-'
    },
    {
        id: 'distance',
        name: i18next.t('distance'),
        subscribe: COBI.tourService.ridingDistance.subscribe,
        unsubscribe: COBI.tourService.ridingDistance.unsubscribe,
        formatter: formatDistanceDot1,
        unit: 'km total',
        defaultValue: '-'
    },
    {
        id: 'calories',
        name: i18next.t('calories'),
        subscribe: COBI.tourService.calories.subscribe,
        unsubscribe: COBI.tourService.calories.unsubscribe,
        formatter: formatInt,
        unit: 'kcal',
        defaultValue: '-'
    },
    {
        id: 'ascent',
        name: i18next.t('ascent'),
        subscribe: COBI.tourService.ascent.subscribe,
        unsubscribe: COBI.tourService.ascent.unsubscribe,
        formatter: formatInt,
        unit: 'm',
        defaultValue: '-'
    },
    {
        id: 'heart_rate',
        name: i18next.t('heart_rate'),
        subscribe: COBI.rideService.heartRate.subscribe,
        unsubscribe: COBI.rideService.heartRate.unsubscribe,
        formatter: formatInt,
        unit: 'bpm',
        defaultValue: '-'
    },
    {
        id: 'duration',
        name: i18next.t('duration'),
        subscribe: COBI.tourService.ridingDuration.subscribe,
        unsubscribe: COBI.tourService.ridingDuration.unsubscribe,
        formatter: formatMins,
        unit: 'min',
        defaultValue: '-'
    }
];
