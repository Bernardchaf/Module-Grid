// Initialize localization with language set by cobi parameter
i18next.init(
    {
        lng: COBI.parameters.language(),
        fallbackLng: ['en', 'de', 'fr'],
        whitelist: ['en', 'de', 'fr'],
        resources: {
            en: {
                translation: {
                    'speed': 'Speed',
                    'average_speed': 'Avg Speed',
                    'user_power': 'User Power',
                    'cadence': 'Cadence',
                    'distance': 'Distance',
                    'calories': 'Calories',
                    'ascent': 'Ascent',
                    'heart_rate': 'Heart Rate',
                    'duration': 'Duration',
                    'speed_gps': 'Speed by GPS'
                }
            },
            de: {
                translation: {
                    'speed': 'Geschwindigkeit',
                    'average_speed': 'durchschnittliche Geschwindigkeit',
                    'user_power': 'Benutzerleistung',
                    'cadence': 'Kadenz',
                    'distance': 'Entfernung',
                    'calories': 'Kalorien',
                    'ascent': 'Aufstieg',
                    'heart_rate': 'Puls',
                    'duration': 'Duration',
                    'speed_gps': 'Geschwindigkeit per GPS'
                }
            },
            fr: {
                translation: {
                    'speed': 'Vitesse',
                    'average_speed': 'Vitesse moyenne',
                    'user_power': 'Energie utilisée',
                    'cadence': 'Fréquence de pédalage',
                    'distance': 'Distance',
                    'calories': 'Calories',
                    'ascent': 'Dénilevé',
                    'heart_rate': 'Rythme cardiaque',
                    'duration': 'Duration',
                    'speed_gps': 'Vitesse avec le GPS'
                    
                }
            }
        }
    },
    function (err, t) {
    }
);
