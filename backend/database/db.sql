DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS users_trip_place CASCADE;
DROP TABLE IF EXISTS places CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS review_votes CASCADE;
DROP TABLE IF EXISTS touristic_places CASCADE;
DROP TABLE IF EXISTS hotels CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;
DROP TABLE IF EXISTS bookings_touristic_place CASCADE;
DROP TABLE IF EXISTS bookings_hotel CASCADE;
DROP TABLE IF EXISTS bookings_restaurant CASCADE;

CREATE TABLE IF NOT EXISTS users
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "userFirstName"
    VARCHAR
(
    50
) NOT NULL,
    "userLastName" VARCHAR
(
    50
) NOT NULL,
    "userID" INT NOT NULL,
    "userEmail" VARCHAR
(
    60
) NOT NULL,
    "userPassword" VARCHAR
(
    150
) NOT NULL
    );

CREATE TABLE IF NOT EXISTS users_trip_place
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "idUser"
    INT
    NOT
    NULL,
    "idPlace"
    INT
    NOT
    NULL
);

CREATE TABLE IF NOT EXISTS places
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "placeName"
    VARCHAR
(
    100
) NOT NULL,
    "placeDesc" VARCHAR
(
    500
) NOT NULL,
    "placePhotos" VARCHAR
(
    150
) NOT NULL
    );

CREATE TABLE IF NOT EXISTS reviews
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "idUser"
    INT
    NOT
    NULL
    NOT
    NULL,
    "idPlace"
    INT
    NOT
    NULL
    NOT
    NULL,
    "reviewPoints"
    SMALLINT
    NOT
    NULL,
    "reviewDesc"
    VARCHAR
(
    200
) NOT NULL
    );

CREATE TABLE IF NOT EXISTS review_votes
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "idUser"
    INT
    NOT
    NULL,
    "idReview"
    INT
    NOT
    NULL,
    "usefulReview"
    BOOLEAN
    NOT
    NULL
);

CREATE TABLE IF NOT EXISTS touristic_places
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "idPlace"
    INT
    NOT
    NULL,
    "touristicPlaceName"
    VARCHAR
(
    100
),
    "touristicPlaceDesc" VARCHAR
(
    200
),
    "touristicPlacePhotos" json
    );

CREATE TABLE IF NOT EXISTS hotels
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "idPlace"
    INT
    NOT
    NULL,
    "hotelName"
    VARCHAR
(
    100
),
    "hotelDesc" VARCHAR
(
    200
),
    "hotelPhotos" json
    );

CREATE TABLE IF NOT EXISTS restaurants
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "idPlace"
    INT
    NOT
    NULL,
    "restaurantName"
    VARCHAR
(
    100
),
    "restaurantDesc" VARCHAR
(
    200
),
    "restaurantPhotos" json
    );

CREATE TABLE IF NOT EXISTS bookings_touristic_place
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "idUser"
    INT
    NOT
    NULL,
    "idTouristicPlace"
    INT
    NOT
    NULL
);

CREATE TABLE IF NOT EXISTS bookings_hotel
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "idUser"
    INT
    NOT
    NULL,
    "idHotel"
    INT
    NOT
    NULL
);

CREATE TABLE IF NOT EXISTS bookings_restaurant
(
    "id"
    SERIAL
    PRIMARY
    KEY,
    "idUser"
    INT
    NOT
    NULL,
    "idRestaurant"
    INT
    NOT
    NULL
);

ALTER TABLE users_trip_place
    ADD CONSTRAINT fk_user
        FOREIGN KEY ("idUser")
            REFERENCES users ("id")
            ON DELETE SET NULL,
	ADD CONSTRAINT fk_place
		FOREIGN KEY("idPlace")
			REFERENCES places("id")
			ON
DELETE
SET NULL;

ALTER TABLE reviews
    ADD CONSTRAINT fk_user
        FOREIGN KEY ("idUser")
            REFERENCES users ("id")
            ON DELETE SET NULL,
	ADD CONSTRAINT fk_place
			FOREIGN KEY("idPlace")
			REFERENCES places("id")
			ON
DELETE
SET NULL;

ALTER TABLE review_votes
    ADD CONSTRAINT fk_user
        FOREIGN KEY ("idUser")
            REFERENCES users ("id")
            ON DELETE SET NULL,
ADD CONSTRAINT fk_review
	FOREIGN KEY("idReview")
			REFERENCES reviews("id")
			ON
DELETE
SET NULL;

ALTER TABLE touristic_places
    ADD CONSTRAINT fk_place
        FOREIGN KEY ("idPlace")
            REFERENCES places ("id")
            ON DELETE SET NULL;

ALTER TABLE hotels
    ADD CONSTRAINT fk_place
        FOREIGN KEY ("idPlace")
            REFERENCES places ("id")
            ON DELETE SET NULL;

ALTER TABLE restaurants
    ADD CONSTRAINT fk_place
        FOREIGN KEY ("idPlace")
            REFERENCES places ("id")
            ON DELETE SET NULL;

ALTER TABLE bookings_touristic_place
    ADD CONSTRAINT fk_user
        FOREIGN KEY ("idUser")
            REFERENCES users ("id")
            ON DELETE SET NULL,
ADD CONSTRAINT fk_touristicPlace
	FOREIGN KEY("idTouristicPlace")
			REFERENCES touristic_places("id")
			ON
DELETE
SET NULL;

ALTER TABLE bookings_hotel
    ADD CONSTRAINT fk_user
        FOREIGN KEY ("idUser")
            REFERENCES users ("id")
            ON DELETE SET NULL,
ADD CONSTRAINT fk_hotel
	FOREIGN KEY("idHotel")
			REFERENCES hotels("id")
			ON
DELETE
SET NULL;

ALTER TABLE bookings_restaurant
    ADD CONSTRAINT fk_user
        FOREIGN KEY ("idUser")
            REFERENCES users ("id")
            ON DELETE SET NULL,
ADD CONSTRAINT bookings_restaurant
	FOREIGN KEY("idRestaurant")
			REFERENCES restaurants("id")
			ON
DELETE
SET NULL;