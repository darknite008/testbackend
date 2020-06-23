DROP TABLE IF EXISTS events;


CREATE TABLE events (id SERIAL PRIMARY KEY,
                                       event_name VARCHAR(255) NOT NULL,
                                                               event_detail VARCHAR(255));


INSERT INTO events (event_name,
                    event_detail)
VALUES ('Party',
        'Veneue at Pokhara');